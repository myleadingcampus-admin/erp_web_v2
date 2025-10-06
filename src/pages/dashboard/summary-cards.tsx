import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface SummaryCardProps {
  title: string
  value: string
  description: string
}

function SummaryCard({ title, value, description }: SummaryCardProps) {
  return (
    <Card className="bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <IoArrowForwardCircleOutline className="h-5 w-5 " />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-green-500">{description}</p>
      </CardContent>
    </Card>
  )
}

type SummaryCardsProps = {
  fees?: {
    collected: number;
  };
};

export function SummaryCards({ fees }: SummaryCardsProps) {
  const collectedFeeAmount = fees?.collected ?? 0;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SummaryCard title="Students Attendance" value="1,025" description="Students Present Today" />
      <SummaryCard title="Employees Attendance" value="350" description="Employees Present Today" />
      <SummaryCard title="Fee Collected" value={`₹${collectedFeeAmount}`} description="Fees Collected - This Month" />
      <SummaryCard title="Staff Alerts" value="5" description="On leave today" />
    </div>
  )
}
