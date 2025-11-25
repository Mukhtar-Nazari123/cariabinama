import Link from "next/link"

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

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] bg-muted/40 py-12">
        <Card className="mx-auto max-w-sm w-full">
            <CardHeader className="text-center">
                <div className="mb-4 inline-block">
                    <Logo />
                </div>
                <CardTitle className="text-2xl font-headline">ایجاد حساب کاربری</CardTitle>
                <CardDescription>
                    برای شروع ماجراجویی شغلی خود، اطلاعات زیر را وارد کنید
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="full-name">نام و نام خانوادگی</Label>
                        <Input id="full-name" placeholder="مثلا: علی رضایی" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">رمز عبور</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        ایجاد حساب
                    </Button>
                    <Button variant="outline" className="w-full">
                        ثبت نام با گوگل
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    قبلا ثبت نام کرده‌اید؟{" "}
                    <Link href="/login" className="underline">
                        وارد شوید
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
