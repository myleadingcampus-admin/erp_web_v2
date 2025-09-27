import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Logo from "../../src/assets/images/mlc-logo.png"
import { useState } from "react"

export function LoginFormWithOtp({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [otpOption, setOtpOption] = useState("whatsapp")

  return (
    <form className={cn("flex flex-col ", className)} {...props}>
      <div className="flex justify-center mb-3 items-center gap-2 text-center">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <h1 className="font-sans text-3xl">Myleading campus ®</h1>
      </div>
      <div className="flex flex-col items-left gap-2 text-left my-5">
      <h1 className="text-lg font-semibold  font-[inter] text-black uppercase">Login with OTP</h1>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="phone" className="font-[inter]">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 9876543210"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label>Send OTP via</Label>
          <RadioGroup
            value={otpOption}
            onValueChange={setOtpOption}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="whatsapp" id="whatsapp" />
              <Label htmlFor="whatsapp" className="font-[inter]">WhatsApp</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms" />
              <Label htmlFor="sms" className="font-[inter]">Mobile Number</Label>
            </div>
          </RadioGroup>
        </div>
        <Button
          type="submit"
          className="w-full bg-[#3366ff] text-white uppercase font-[inter]"
        >
          Send OTP
        </Button>
      </div>
      <div className="text-center text-sm mt-6 font-[inter]">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}

export default LoginFormWithOtp