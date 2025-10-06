import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Start from "@/assets/icons/start.png"

interface InsightItemProps {
  text: string
  linkText: string
  href: string
}

function InsightItem({ text, linkText, href }: InsightItemProps) {
  return (
    <div
      className="
        border-l-2 pl-3 py-2 px-4 rounded-xl shadow-sm space-y-1 transition-all duration-300
        bg-[oklch(0.95_0.05_290_/_0.6)] border-white/30 text-[oklch(0.22_0_0)]
        dark:bg-[oklch(0.3_0.05_290_/_0.6)] dark:border-white/20 dark:text-[oklch(0.98_0_0)]
      "
    >
      <p className="text-sm">{text}</p>
      <a
        href={href}
        className="
          text-xs font-medium hover:underline transition-colors
          text-[oklch(0.22_0_0)] dark:text-[oklch(0.98_0_0)]
        "
      >
        {linkText} <span className="ml-1">&gt;</span>
      </a>
    </div>
  )
}

const AiInsights = () => {
  return (
    <Card
      className="
        rounded-xl shadow-md transition-all duration-300
        bg-gradient-to-r from-[#F0F0FD] to-[#F4E2F1]
        text-[oklch(0.22_0_0)]
        dark:from-[#5E5EFF] dark:to-[#E131C4] dark:text-[oklch(0.98_0_0)]
      "
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <img src={Start} alt="Start" className="w-10 h-10" /> AI Insights
        </CardTitle>

        <Button
          className="
            text-xs rounded-full h-auto px-4 py-2 cursor-pointer font-medium border border-white/20
            bg-[oklch(0.5_0.15_260_/_0.6)] text-white hover:bg-[oklch(0.5_0.15_260_/_0.8)]
            dark:bg-[oklch(0.35_0.08_270_/_0.6)] dark:hover:bg-[oklch(0.38_0.08_270_/_0.8)]
          "
        >
          View All <span className="ml-1">&gt;</span>
        </Button>
      </CardHeader>

      <CardContent className="grid gap-4">
        <InsightItem
          text="Great news! Your school has 32% fewer latecomers this month compared to last month."
          linkText="View detailed report"
          href="#"
        />
        <InsightItem
          text="Class 10B has the highest absenteeism rate (23%) this week. Consider parent meeting."
          linkText="Send reminders"
          href="#"
        />
        <InsightItem
          text="Fee collection trend suggests you may fall short by 15% this month. Early reminders recommended."
          linkText="Send fee reminders"
          href="#"
        />
      </CardContent>
    </Card>
  )
}

export default AiInsights
