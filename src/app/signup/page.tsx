"use client";

import Link from "next/link";
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";
import { signupAction, type SignupState } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";


const initialState: SignupState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="me-2 h-4 w-4 animate-spin" />
          در حال ایجاد حساب...
        </>
      ) : (
        "ایجاد حساب"
      )}
    </Button>
  );
}


export default function SignupPage() {
    const [state, formAction] = useActionState(signupAction, initialState);

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
                <form action={formAction} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">نام و نام خانوادگی</Label>
                        <Input id="fullName" name="fullName" placeholder="مثلا: علی رضایی" required />
                         {state.errors?.fullName && <p className="text-sm text-destructive">{state.errors.fullName[0]}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        />
                        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">رمز عبور</Label>
                        <Input id="password" name="password" type="password" required/>
                        {state.errors?.password && <p className="text-sm text-destructive">{state.errors.password[0]}</p>}
                    </div>
                    <SubmitButton />
                    <Button variant="outline" className="w-full">
                        ثبت نام با گوگل
                    </Button>
                </form>

                 {state.message && !state.errors && (
                    <Alert variant={state.errors ? 'destructive' : 'default'} className="mt-4">
                        <AlertTitle>{state.errors ? 'خطا' : 'موفقیت'}</AlertTitle>
                        <AlertDescription>
                            {state.message}
                             {!state.errors && (
                                <>
                                 {' '}می‌توانید از <Link href="/login" className="underline font-bold">اینجا وارد شوید</Link>.
                                </>
                             )}
                        </AlertDescription>
                    </Alert>
                )}

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
