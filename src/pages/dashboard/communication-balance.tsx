import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BalanceCardProps {
  title: string
  balance: string
  status: string
  statusColor: string
  cardBgColor: string
  cardBorderColor: string
}

function BalanceCard({ title, balance, status, statusColor, cardBgColor, cardBorderColor }: BalanceCardProps) {
  return (
    <Card className={cn(
      " rounded-xl shadow-md flex flex-col items-center justify-center relative",
      cardBgColor,
      cardBorderColor,
      "border"
    )}>
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-sm font-medium text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <div className="text-3xl font-bold text-white">{balance}</div>
        <Badge className={cn(`text-xs px-2 py-1 rounded-full text-white`, statusColor, "absolute top-4 right-4")}>
          {status}
        </Badge>
        <Button className="mt-4 w-[200px] bg-[#009b51] text-lg  text-[var(--dashboard-topup-button-foreground)] rounded-full  hover:bg-[var(--dashboard-topup-button-bg)]/90"> {/* Full width and pill shape */}
          Top Up
        </Button>
      </CardContent>
    </Card>
  )
}

type CommunicationBalanceProps = {
  communicationBalance?: {
    sms: number;
    email: number;
    whatsapp: number;
  };
};

export function CommunicationBalance({ communicationBalance }: CommunicationBalanceProps) {
  return (
    <Card className="p-4 bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Communication Balance</CardTitle>
        <Button variant="outline" className="text-[var(--dashboard-manage-button-foreground)] bg-[var(--dashboard-manage-button-bg)] rounded-full px-4 py-2 hover:bg-[var(--dashboard-manage-button-bg)]/90"> {/* Styled button */}
          Manage <span className="ml-1">&gt;</span>
        </Button>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceCard
          title="SMS Balance"
          balance={communicationBalance?.sms?.toString() || "0"}
          status={communicationBalance?.sms ? "Active" : "No Balance"}
          statusColor={communicationBalance?.sms ? "bg-green-500" : "bg-red-500"}
          cardBgColor="bg-[#3c2727]/40 backdrop-blur-md border border-white/20"
          cardBorderColor="border-[var(--dashboard-sms-card-border)]"
        />
        <BalanceCard
          title="Email Balance"
          balance={communicationBalance?.email?.toString() || "0"}
          status={communicationBalance?.email ? "Active" : "No Balance"}
          statusColor={communicationBalance?.email ? "bg-green-500" : "bg-red-500"}
          cardBgColor="bg-black/40 backdrop-blur-md border border-white/20"
          cardBorderColor="border-[var(--dashboard-email-card-border)]"
        />
      </div>
    </Card>
  )
}
