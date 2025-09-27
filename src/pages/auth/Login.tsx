import { useState } from "react"
import loginRightSideImg from "../../assets/images/login-side-img.png"
import LoginFormWithOtp from "../../components/LoginWithOtp"
import LoginForm from "@/components/login-form"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [showOtpLogin, setShowOtpLogin] = useState(false)
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {showOtpLogin ? <LoginFormWithOtp /> : <LoginForm />}
            <Button
              variant="outline"
              className="w-full bg-[#0575e6] text-white uppercase my-3"
              onClick={() => setShowOtpLogin(!showOtpLogin)}
            >
              {showOtpLogin ? "Login with Email" : "Login with OTP"}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={loginRightSideImg}
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
