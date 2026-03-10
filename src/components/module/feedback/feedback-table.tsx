import { useState } from "react"
import { FeedbackTableRow } from "./feedback-table-row"
import { FeedbackDetailsModal } from "./feedback-details-modal"
import { FeedbackDeleteDialog } from "./feedback-delete-dialog"
import { useGetFeedbacksQuery } from "@/store/api/feedback.api"
import type { IFeedback } from "@/types/feedback.types"
import { Button } from "@/components/ui/button"

export function FeedbackTable() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useGetFeedbacksQuery({
    page,
    limit: 10,
  })
  console.log(data);
  const [selectedFeedback, setSelectedFeedback] = useState<IFeedback | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  if (isLoading) return <div className="w-full flex justify-center items-center py-10">
    <p>Loading...</p>
  </div>

  return (
    <div className="space-y-4">

      <table className="w-full border rounded-lg">

  <thead className="bg-muted ">
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
      <div className="flex justify-end gap-2">

        <Button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          variant={"outline"}
        >
          Prev
        </Button>

        <Button
          disabled={page === data?.data.meta.totalPage}
          onClick={() => setPage((p) => p + 1)}
          variant={"outline"}
        >
          Next
        </Button>

      </div>

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