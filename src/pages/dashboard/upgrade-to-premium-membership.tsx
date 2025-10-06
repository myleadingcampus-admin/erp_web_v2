import { Button } from "@/components/ui/button"
import Dimond from "@/assets/images/upgrade-premium-icons.png"

const UpgradeToPremiumMembership = () => {
  return (
    <div className="
      flex items-center justify-between p-4 rounded-2xl shadow-md transition-all duration-300 
      bg-gradient-to-r from-[#f3e9d2] to-[#e8d9b5] text-gray-900 
      dark:from-[#3a3525] dark:to-[#2e2a1f] dark:text-white
    ">
      <div className="flex items-center gap-4">
        <img
          src={Dimond}
          alt="Premium Icon"
          className="h-14 w-14 drop-shadow-lg"
        />
        <div>
          <h2 className="text-lg font-semibold">
            Upgrade to Premium Membership
          </h2>
          <p className="text-sm opacity-80">Access Premium Features</p>
        </div>
      </div>

      <Button
        variant="secondary"
        className="
          bg-[#016dbf] hover:bg-[#015ba0] text-white text-sm rounded-full border border-transparent
          dark:bg-[#1e88e5] dark:hover:bg-[#1976d2] dark:text-white
        "
      >
        Upgrade Now
      </Button>
    </div>
  )
}

export default UpgradeToPremiumMembership
