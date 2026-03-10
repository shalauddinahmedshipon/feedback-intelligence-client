import { useState } from "react"
import { FeedbackTableRow } from "./feedback-table-row"
import { FeedbackDetailsModal } from "./feedback-details-modal"
import { FeedbackDeleteDialog } from "./feedback-delete-dialog"
import { useGetFeedbacksQuery } from "@/store/api/feedback.api"
import type { IFeedback, FeedbackCategory, FeedbackPriority, FeedbackSentiment, FeedbackTeam } from "@/types/feedback.types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories, priorities, sentiments, teams } from "./feedback.constant"



export function FeedbackTable() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<FeedbackCategory | undefined>()
  const [priorityFilter, setPriorityFilter] = useState<FeedbackPriority | undefined>()
  const [sentimentFilter, setSentimentFilter] = useState<FeedbackSentiment | undefined>()
  const [teamFilter, setTeamFilter] = useState<FeedbackTeam | undefined>()

  const { data, isLoading } = useGetFeedbacksQuery({
    page,
    limit: 10,
    search: search || undefined,
    category: categoryFilter,
    priority: priorityFilter,
    sentiment: sentimentFilter,
    team: teamFilter,
  })

  const [selectedFeedback, setSelectedFeedback] = useState<IFeedback | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p>Loading...</p>
      </div>
    )

  return (
    <div className="space-y-4">
      {/* Filters & Search */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Input
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className="flex-1 min-w-50"
        />

        {/* Category */}
        <Select
          value={categoryFilter ?? ""}
          onValueChange={(v) => { setCategoryFilter(v as FeedbackCategory | undefined); setPage(1) }}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
          </SelectContent>
        </Select>

        {/* Priority */}
        <Select
          value={priorityFilter ?? ""}
          onValueChange={(v) => { setPriorityFilter(v as FeedbackPriority | undefined); setPage(1) }}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            {priorities.map((p) => <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>)}
          </SelectContent>
        </Select>

        {/* Sentiment */}
        <Select
          value={sentimentFilter ?? ""}
          onValueChange={(v) => { setSentimentFilter(v as FeedbackSentiment | undefined); setPage(1) }}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue placeholder="Sentiment" />
          </SelectTrigger>
          <SelectContent>
            {sentiments.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
          </SelectContent>
        </Select>

        {/* Team */}
        <Select
          value={teamFilter ?? ""}
          onValueChange={(v) => { setTeamFilter(v as FeedbackTeam | undefined); setPage(1) }}
        >
          <SelectTrigger className="w-37.5">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            {teams.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
          </SelectContent>
        </Select>

        {/* Reset */}
        <Button
          variant="outline"
          onClick={() => {
            setSearch("")
            setCategoryFilter(undefined)
            setPriorityFilter(undefined)
            setSentimentFilter(undefined)
            setTeamFilter(undefined)
            setPage(1)
          }}
        >
          Reset Filters
        </Button>
      </div>

      {/* Table */}
      <table className="w-full border rounded-lg">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left font-medium">User</th>
            <th className="p-3 text-left font-medium">Message</th>
            <th className="p-3 text-left font-medium">Category</th>
            <th className="p-3 text-left font-medium">Priority</th>
            <th className="p-3 text-left font-medium">Sentiment</th>
            <th className="p-3 text-left font-medium">Team</th>
            <th className="p-3 text-left font-medium">Date</th>
            <th className="p-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.data.map((feedback) => (
            <FeedbackTableRow
              key={feedback._id}
              feedback={feedback}
              onView={(f) => setSelectedFeedback(f)}
              onDelete={(id) => setDeleteId(id)}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-2">
        <Button disabled={page === 1} onClick={() => setPage(p => p - 1)} variant="outline">Prev</Button>
        <Button disabled={page === data?.data.meta.totalPage} onClick={() => setPage(p => p + 1)} variant="outline">Next</Button>
      </div>

      {/* Modals */}
      <FeedbackDetailsModal
        open={!!selectedFeedback}
        onOpenChange={() => setSelectedFeedback(null)}
        feedback={selectedFeedback}
      />
      <FeedbackDeleteDialog
        id={deleteId}
        open={!!deleteId}
        onOpenChange={() => setDeleteId(null)}
      />
    </div>
  )
}