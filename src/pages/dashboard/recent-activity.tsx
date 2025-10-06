import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ActivityItemProps {
  category: string
  description: string
  date: string
  timeAgo: string
}

function ActivityItem({ category, description, date, timeAgo }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-dashboard-card-foreground">{category}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">
          {date} • {timeAgo}
        </p>
      </div>
    </div>
  )
}

export function RecentActivity() {
  return (
    <Card className="mt-6 bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="outline" className="text-[var(--dashboard-manage-button-foreground)] text-xs bg-[var(--dashboard-manage-button-bg)] rounded-full px-3 py-1 hover:bg-[var(--dashboard-manage-button-bg)]/90"> 
          View All <span className="ml-1">&gt;</span>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ActivityItem
          category="Attendance"
          description="Sara submitted attendance report for Q1"
          date="Fri 22, 2023"
          timeAgo="5 mins"
        />
        <ActivityItem
          category="Assignments"
          description="James uploaded midterm project guidelines"
          date="Fri 22, 2023"
          timeAgo="15 mins"
        />
        <ActivityItem
          category="Events"
          description="Anna created an event for the science fair"
          date="Sat 23, 2023"
          timeAgo="30 mins"
        />
           <ActivityItem
          category="Events"
          description="Anna created an event for the science fair"
          date="Sat 23, 2023"
          timeAgo="30 mins"
        />
      </CardContent>
    </Card>
  )
}
