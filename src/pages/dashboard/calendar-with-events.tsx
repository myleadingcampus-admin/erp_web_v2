import * as React from "react"
import { CalendarDays, Paintbrush, Users, MessageSquare } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EventItemProps {
  time: string
  title: string
  description: string
  icon: React.ElementType
}

function EventItem({ time, title, description, icon: Icon }: EventItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-blue-600/20 text-blue-600  flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-dashboard-card-foreground">{time}</p>
        <p className="text-base font-semibold text-dashboard-card-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

const ALL_EVENTS = [
  {
    date: new Date(2025, 6, 4), 
    time: "11:45 PM",
    title: "Annual Science Fair",
    description: "Join us for a day of innovation, creativity and experimentation.",
    icon: CalendarDays,
  },
  {
    date: new Date(2025, 6, 7), 
    time: "9:00 AM",
    title: "Weekly Staff Meeting",
    description: "Review of last week's progress and planning for the upcoming week.",
    icon: Users,
  },
    {
    date: new Date(2025, 6, 7), 
    time: "9:00 AM",
    title: "Weekly Staff Meeting",
    description: "Review of last week's progress and planning for the upcoming week.",
    icon: Users,
  },
  {
    date: new Date(2025, 6, 19), 
    time: "3:00 PM",
    title: "Art & Craft Exhibition",
    description: "Come see our students' creativity on display – from paintings to handmade crafts.",
    icon: Paintbrush,
  },
  {
    date: new Date(2025, 6, 25), 
    time: "10:00 AM",
    title: "Parent-Teacher Meeting",
    description: "Discussion on student progress and academic plans.",
    icon: Users,
  },
]

export function CalendarWithEvents() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 6, 7))
  const [captionLayout, setCaptionLayout] = React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdowns")
  const [displayMonth, setDisplayMonth] = React.useState<Date>(new Date(2025, 6, 1)) 

  const eventDates = React.useMemo(() => ALL_EVENTS.map((event) => event.date), [])

  const filteredEvents = React.useMemo(() => {
    if (!date) return []
    return ALL_EVENTS.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }, [date])

  const years = Array.from({ length: 2030 - 2020 + 1 }, (_, i) => 2020 + i);
  const months = [
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" },
  ];

  return (
    <Card className="  bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2 w-full">
          <Select
            value={displayMonth.getMonth().toString()}
            onValueChange={(value) => {
              const newMonth = new Date(displayMonth.getFullYear(), parseInt(value), 1);
              setDisplayMonth(newMonth);
            }}
          >
            <SelectTrigger className="w-1/2 h-8 text-sm">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={displayMonth.getFullYear().toString()}
            onValueChange={(value) => {
              const newYear = new Date(parseInt(value), displayMonth.getMonth(), 1);
              setDisplayMonth(newYear);
            }}
          >
            <SelectTrigger className="w-1/2 h-8 text-sm">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          month={displayMonth} 
          onMonthChange={setDisplayMonth} 
          modifiers={{ event: eventDates }}
          modifiersClassNames={{
            event: " text-white rounded-full ",
            selected: " text-white rounded-full ",
          }}
          weekStartsOn={1}
          captionLayout={captionLayout}
          fromYear={2020}
          toYear={2030}
        />
       
      </CardContent>

      {filteredEvents.length > 0 && (
        <div className="mt-6 px-5 ">
          <CardTitle className="text-lg font-semibold mb-4">Today</CardTitle>
          <div className="grid gap-4 ">
            {filteredEvents.map((event, index) => (
              <EventItem
                key={index}
                time={event.time}
                title={event.title}
                description={event.description}
                icon={event.icon}
              />
            ))}
          </div>
        </div>
      )}

  
    </Card>
  )
}
