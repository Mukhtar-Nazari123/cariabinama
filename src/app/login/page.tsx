"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/shared/logo"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials with a backend service.
    // Here, we simulate login for different roles.
    if (email === "admin1234@gmail.com") {
      toast({
        title: "ورود موفق",
        description: "به داشبورد خود خوش آمدید.",
      })
      router.push("/dashboard")
    } else if (email && password) {
      // Simulate a successful login for any other user
      toast({
        title: "ورود موفق",
        description: "خوش آمدید!",
      })
      router.push("/")
    } else {
      // This case is for demo purposes. A real app would have more robust validation.
      toast({
        variant: "destructive",
        title: "خطا در ورود",
        description: "ایمیل یا رمز عبور نامعتبر است.",
      })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-muted/40 py-12">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="text-center">
          <div className="mb-4 inline-block">
             <Logo />
          </div>
          <CardTitle className="text-2xl font-headline">ورود به حساب کاربری</CardTitle>
          <CardDescription>
            ایمیل و رمز عبور خود را برای ورود وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">رمز عبور</Label>
                <Link
                  href="#"
                  className="ms-auto inline-block text-sm underline"
                >
                  رمز عبور خود را فراموش کرده‌اید؟
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              ورود
            </Button>
            <Button variant="outline" className="w-full" type="button">
              ورود با گوگل
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            حساب کاربری ندارید؟{" "}
            <Link href="/signup" className="underline">
              ثبت نام کنید
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
