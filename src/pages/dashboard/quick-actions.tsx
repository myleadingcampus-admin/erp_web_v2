import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MdAdd,
  MdLocalShipping
} from "react-icons/md"

import fee from "@/assets/images/fee.png"
import BookPen from "@/assets/images/bookpen.png"
import message from "@/assets/images/message.png"
import transport from "@/assets/images/transport.png"
interface QuickActionCardProps {
  title: string
  image?: string
  icon?: React.ElementType
  href: string
}

function QuickActionCard({ title, icon: Icon, href, image }: QuickActionCardProps) {
  return (
    <a href={href} className="block">
      <Card className="flex flex-col items-center justify-center  bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md h-32 w-32 md:h-32 md:w-32">
        <CardContent className="flex flex-col items-center justify-center ">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-12 h-12 mb-2 object-contain"
            />
          )}
          {Icon && (
            <Icon className="h-8 w-8 text-blue-600 mb-2" />
          )}
          <p className="text-sm font-medium text-center">{title}</p>
        </CardContent>
      </Card>
    </a>
  )
}

export function QuickActions() {
  return (
    <Card className="bg-dashboard-card text-dashboard-card-foreground rounded-xl shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0  ">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        <Button variant="link" className="text-sm text-blue-500 p-0 h-auto ">
          View All <span className="ml-1">&gt;</span>
        </Button>
      </CardHeader> 
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4  py-2 px-4" style={{ minWidth: 0 }}>
    <Button
      variant="ghost"
      className="flex flex-col items-center justify-center p-4 cursor-pointer 
      bg-[#e8f1f8] dark:bg-[#1a364a] 
      text-[#1a364a] dark:text-white 
      rounded-xl shadow-md h-32 w-32 min-w-[8rem] 
      hover:bg-[#d7e7f5] dark:hover:bg-[#234d66] transition-all"
    >
      <div className="flex items-center justify-center 
        bg-[#016dbf] dark:bg-[#0088ff] 
        h-12 w-12 rounded-full border border-white shadow">
        <MdAdd className="h-6 w-6 text-white" />
      </div>
      <span className="text-sm font-medium mt-2">Add New</span>
    </Button>
          <QuickActionCard title="Send Notice" image={message} href="#" />
          <QuickActionCard title="Assignment" image={BookPen} href="#" />
          <QuickActionCard title="Fees" image={fee} href="#" />
          <QuickActionCard title="Transport" image={transport} href="#" />
        </div>
      </div>
    </Card>
  )
}
