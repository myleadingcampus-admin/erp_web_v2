
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md"
import { cn } from "@/lib/utils"

export function CalendarCard() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth())
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear())

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay() 
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear)
  const prevMonthStart = prevMonthDays - firstDay + 1
  const prevDays = Array.from({ length: firstDay }, (_, i) => prevMonthStart + i)

  const nextDaysCount = 42 - (daysInMonth + firstDay)
  const nextDays = Array.from({ length: nextDaysCount }, (_, i) => i + 1)

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1)
        return 11
      }
      return prev - 1
    })
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1)
        return 0
      }
      return prev + 1
    })
  }

  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })

  return (
    <Card className="p-4 bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          {monthName} {currentYear} <MdKeyboardArrowDown className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePrevMonth}>
            <MdKeyboardArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleNextMonth}>
            <MdKeyboardArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 text-center text-sm font-medium text-muted-foreground mb-2">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {prevDays.map((day, index) => (
            <span key={`prev-${index}`} className="text-muted-foreground opacity-50 p-2 rounded-full">
              {day}
            </span>
          ))}
          {days.map((day) => (
            <span
              key={day}
              className={cn(
                "p-2 rounded-full cursor-pointer",
                day === 4 && "bg-purple-500 text-white",
                day === 7 && "bg-blue-500 text-white",
                day === 19 && "bg-purple-500 text-white",
                day === 25 && "bg-purple-500 text-white",
                day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                  ? "border border-blue-500 text-blue-500"
                  : "hover:bg-muted",
              )}
            >
              {day}
            </span>
          ))}
          {nextDays.map((day, index) => (
            <span key={`next-${index}`} className="text-muted-foreground opacity-50 p-2 rounded-full">
              {day}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
