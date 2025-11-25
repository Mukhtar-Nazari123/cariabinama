"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getJobRecommendations, type RecommendationState } from './actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExternalLink, Loader2, Building, MapPin, FileText } from 'lucide-react';
import Link from 'next/link';

const initialState: RecommendationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="me-2 h-4 w-4 animate-spin" />
          در حال یافتن...
        </>
      ) : (
        'دریافت توصیه‌ها'
      )}
    </Button>
  );
}

export function JobRecommendationForm() {
  const [state, formAction] = useFormState(getJobRecommendations, initialState);

  return (
    <div>
      <Card className="shadow-lg">
        <form action={formAction}>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">مشخصات خود را وارد کنید</CardTitle>
            <CardDescription>
              هرچه اطلاعات دقیق‌تری ارائه دهید، توصیه‌های بهتری دریافت خواهید کرد.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="skills">مهارت‌ها (جدا شده با کاما)</Label>
              <Input
                id="skills"
                name="skills"
                placeholder="مثال: React, Node.js, TypeScript"
                required
              />
              {state?.errors?.skills && (
                <p className="text-sm text-destructive">{state.errors.skills[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferences">ترجیحات شغلی</Label>
              <Textarea
                id="preferences"
                name="preferences"
                placeholder="مثال: به دنبال یک موقعیت شغلی تمام وقت در یک استارتاپ فناوری در تهران هستم. علاقه‌مند به کار روی محصولات SaaS و تیم‌های کوچک و پویا."
                required
                rows={5}
              />
              {state?.errors?.preferences && (
                <p className="text-sm text-destructive">{state.errors.preferences[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state?.message && !state.data && (
        <Alert variant={state.errors ? "destructive" : "default"} className="mt-8">
          <AlertTitle>{state.errors ? 'خطا در ورودی' : 'پیام'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state?.data && (
        <div className="mt-12">
            <h2 className="font-headline text-3xl font-bold text-center mb-8">فرصت‌های شغلی پیشنهادی برای شما</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {state.data.map((job, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 pt-1">
                                <Building className="w-4 h-4" />
                                {job.company}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <p className="text-sm text-muted-foreground line-clamp-3 flex items-start gap-2">
                                <FileText className="w-4 h-4 mt-1 flex-shrink-0"/>
                                <span>{job.description}</span>
                            </p>
                             <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                        </CardContent>
                        <CardFooter>
                             <Button asChild className="w-full">
                                <a href={job.url} target="_blank" rel="noopener noreferrer">
                                    مشاهده آگهی
                                    <ExternalLink className="ms-2 h-4 w-4" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      )}
    </div>
  );
}
