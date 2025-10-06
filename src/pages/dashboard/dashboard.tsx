import AiInsights from "./aiInsights"
import AttendanceOverview from "./attendance-overview"
import { CalendarWithEvents } from "./calendar-with-events"
import { CommunicationBalance } from "./communication-balance"
import { QuickActions } from "./quick-actions"
import { RecentActivity } from "./recent-activity"
import { SummaryCards } from "./summary-cards"
import UpgradeToPremiumMembership from "./upgrade-to-premium-membership"
import { SidebarInset } from "@/components/ui/sidebar";
const Dashboard = () => {
  const dashboardData = {
    "communicationBalance": {
      "sms": 34149,
      "email": 40989,
      "whatsapp": 69999
    },
    "fees": {
      "collected": "0"
    },
    "attendance": {
      "students": {
        "total": 377,
        "present": 0,
        "absent": 0,
        "onLeave": 0
      },
      "employees": {
        "total": 10,
        "present": 0,
        "absent": 0,
        "onLeave": 0
      }
    }
  }
  return (
    <SidebarInset className="bg-dashboard-background">
      <div className="grid grid-cols-1 gap-6 p-4  lg:grid-cols-3 auto-rows-min">
        <div className="lg:col-span-3">
          <UpgradeToPremiumMembership />
        </div>
        <div className="lg:col-span-3">
          <SummaryCards fees={dashboardData?.fees} />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <QuickActions />
          <AiInsights />
          <AttendanceOverview attendance={dashboardData?.attendance} />
          <CommunicationBalance communicationBalance={dashboardData?.communicationBalance} />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-0">
          <CalendarWithEvents />
          <RecentActivity />
        </div>
      </div>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-2 py-2" style={{ minWidth: 0 }}>
        </div>
      </div>
    </SidebarInset>
  )
}

export default Dashboard