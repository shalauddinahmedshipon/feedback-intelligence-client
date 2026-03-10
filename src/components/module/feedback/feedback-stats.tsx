import { useGetFeedbackStatsQuery } from "@/store/api/feedback.api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categoryColors: Record<string, string> = {
  bug: "bg-red-100 text-red-800",
  feature: "bg-blue-100 text-blue-800",
  billing: "bg-yellow-100 text-yellow-800",
  ux: "bg-purple-100 text-purple-800",
  performance: "bg-indigo-100 text-indigo-800",
  security: "bg-pink-100 text-pink-800",
  other: "bg-gray-100 text-gray-800",
}

const priorityColors: Record<string, string> = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  urgent: "bg-red-100 text-red-800",
}

const sentimentColors: Record<string, string> = {
  positive: "bg-green-100 text-green-800",
  neutral: "bg-gray-100 text-gray-800",
  negative: "bg-red-100 text-red-800",
}

const teamColors: Record<string, string> = {
  engineering: "bg-blue-100 text-blue-800",
  product: "bg-purple-100 text-purple-800",
  support: "bg-indigo-100 text-indigo-800",
  billing: "bg-yellow-100 text-yellow-800",
  design: "bg-pink-100 text-pink-800",
  security: "bg-red-100 text-red-800",
}

export function FeedbackStats() {
  const { data, isLoading } = useGetFeedbackStatsQuery()

  if (isLoading || !data) return null

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {/* Category Stats */}
      <Card className="flex-1 min-w-[200px]">
        <CardHeader>
          <CardTitle>Category</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.data.byCategory.map((c) => (
            <div
              key={c._id}
              className={`px-3 py-1 rounded text-sm font-medium ${categoryColors[c._id]}`}
            >
              {`${c._id.charAt(0).toUpperCase() + c._id.slice(1)}: ${c.count}`}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Priority Stats */}
      <Card className="flex-1 min-w-[200px]">
        <CardHeader>
          <CardTitle>Priority</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.data.byPriority.map((p) => (
            <div
              key={p._id}
              className={`px-3 py-1 rounded text-sm font-medium ${priorityColors[p._id]}`}
            >
              {`${p._id.charAt(0).toUpperCase() + p._id.slice(1)}: ${p.count}`}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sentiment Stats */}
      <Card className="flex-1 min-w-[200px]">
        <CardHeader>
          <CardTitle>Sentiment</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.data.bySentiment.map((s) => (
            <div
              key={s._id}
              className={`px-3 py-1 rounded text-sm font-medium ${sentimentColors[s._id]}`}
            >
              {`${s._id.charAt(0).toUpperCase() + s._id.slice(1)}: ${s.count}`}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Team Stats */}
      <Card className="flex-1 min-w-[200px]">
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {data.data.byTeam.map((t) => (
            <div
              key={t._id}
              className={`px-3 py-1 rounded text-sm font-medium ${teamColors[t._id]}`}
            >
              {`${t._id.charAt(0).toUpperCase() + t._id.slice(1)}: ${t.count}`}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}