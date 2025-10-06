import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md"

type AttendanceOverviewProps = {
  attendance?: {
    students: { total: number; present: number; absent: number; onLeave: number };
    employees: { total: number; present: number; absent: number; onLeave: number };
  };
};

export function AttendanceOverview({ attendance }: AttendanceOverviewProps) {
  const [status, setStatus] = useState<"students" | "employees">("students");
  const data = attendance?.[status] ?? { total: 0, present: 0, absent: 0, onLeave: 0 };
  const total = data.total;
  const present = data.present;
  const percent = total > 0 ? present / total : 0;
  const absent = data.absent;
  const onLeave = data.onLeave;

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (1 - percent);

  return (
    <Card className=" bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Attendance Overview</CardTitle>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-sm capitalize">
                {status} <MdKeyboardArrowDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setStatus("students")}>Students</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus("employees")}>Employees</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="text-[var(--dashboard-manage-button-foreground)] bg-[var(--dashboard-manage-button-bg)] rounded-full px-3 py-1 hover:bg-[var(--dashboard-manage-button-bg)]/90">
            View All <span className="ml-1">&gt;</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Absent (background) */}
            <circle
              stroke="#ef4444" 
              strokeWidth="10"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            {/* Present (progress) */}
            <circle
              stroke="#3b82f6" 
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
              style={{ transition: "stroke-dashoffset 0.5s" }}
            />
          </svg>
          <div className="absolute text-2xl font-bold" style={{ color: "#3b82f6" }}>
            {total > 0 ? `${Math.round(percent * 100)}%` : "0%"}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
          <Card className="p-4 bg-dashboard-card rounded-xl shadow-sm flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-sm">Present</span>
            </div>
            <span className="font-bold text-3xl mt-2">{present}</span>
          </Card>
          <Card className="p-4 bg-dashboard-card rounded-xl shadow-sm flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-sm">Absent</span>
            </div>
            <span className="font-bold text-3xl mt-2">{absent}</span>
          </Card>
          <Card className="p-4 bg-dashboard-card rounded-xl shadow-sm flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-sm">On Leave</span>
            </div>
            <span className="font-bold text-3xl mt-2">{onLeave}</span>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}


export default AttendanceOverview