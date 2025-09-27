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
      <div className="flex justify-center  items-center gap-2 text-center">
        <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
        <h1 className="font-[inter]  text-3xl text-[#2e3a59]">Myleading campus </h1>
      </div>
      <div className="flex flex-col items-left gap-2 my-5 text-left">
        <h1 className="text-lg font-semibold  font-[inter] text-black uppercase">Login</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label className="font-[inter]" htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="font-[inter]">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 font-[inter] hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full font-[inter] bg-[#3366ff] text-white h-12 uppercase">
         Login
        </Button>
        <div className="flex items-center ">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500 font-[inter]">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* <Button variant="outline" className="w-full bg-[#0575e6] text-white uppercase">
          Login with OTP
        </Button> */}
      </div>
      <div className="text-center text-sm font-[inter]">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
