import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "../../src/assets/images/mlc-logo.png"
import { Link } from "react-router-dom"
import { FiEye, FiEyeOff } from "react-icons/fi"

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className={cn("flex flex-col", className)} {...props}>
      <div className="flex justify-center items-center gap-2 text-center">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <h1 className="font-[inter] text-3xl text-[#2e3a59]">
          Myleading campus
        </h1>
      </div>

      <div className="flex flex-col items-left gap-2 my-6 text-left">
        <h1 className="text-xl font-bold font-[inter] text-black uppercase">
          Login 👋
        </h1>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label className="font-[inter] text-lg" htmlFor="email">
            Username
          </Label>
          <Input
            id="email"
            className="h-[44px]"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>

        <div className="grid gap-3 relative">
          <div className="flex items-center">
            <Label htmlFor="password" className="font-[inter] text-lg">
              Password
            </Label>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="h-[44px] pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <Link
            to="/forget-password"
            className="ml-auto text-sm text-indigo-500 font-[inter] hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Button
          variant="outline"
          type="submit"
          className="w-full font-[inter] bg-[#3366ff] text-white h-12 uppercase"
        >
          Login
        </Button>
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500 font-[inter]">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      <div className="text-center text-sm font-[inter] my-4">
        Don&apos;t have an account?{" "}
      <Link 
  to="/sign-up" 
  className="underline underline-offset-4"
>
  Sign up
</Link>

      </div>
    </form>
  )
}
