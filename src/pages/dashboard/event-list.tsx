import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { MdCalendarMonth, MdBrush } from "react-icons/md"

interface EventItemProps {
  time: string
  title: string
  description: string
  icon: React.ElementType
}

function EventItem({ time, title, description, icon: Icon }: EventItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-blue-600/20 text-blue-600 flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
    </div>
  )
}

export function EventList() {
  return (
    <Card className="p-4 bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Today</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <EventItem
          time="11:45 PM"
          title="Annual Science Fair"
          description="Join us for a day of innovation, creativity and experimentation."
          icon={MdCalendarMonth}
        />
        <EventItem
          time="3:00 PM"
          title="Art & Craft Exhibition"
          description="Come see our students' creativity on display – from paintings to handmade crafts."
          icon={MdBrush}
        />
      </CardContent>
    </Card>
  )
}
