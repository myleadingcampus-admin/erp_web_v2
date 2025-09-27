import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "../../src/assets/images/mlc-logo.png"

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col ", className)} {...props}>
      <div className="flex justify-center mb-3 items-center gap-2 text-center">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <h1 className="font-sans text-3xl">Myleading campus ®</h1>
      </div>
      <div className="flex flex-col items-left gap-2 text-left">
        <h1 className="text-2xl my-2 font-bold text-black">Sign In</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full bg-[#3366ff] text-white uppercase">
          Sign In
        </Button>
        <div className="flex items-center ">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* <Button variant="outline" className="w-full bg-[#0575e6] text-white uppercase">
          Login with OTP
        </Button> */}
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
