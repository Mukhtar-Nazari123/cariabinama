import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PostJobPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">ثبت آگهی شغلی جدید</CardTitle>
          <CardDescription>
            اطلاعات زیر را تکمیل کنید تا آگهی شما برای هزاران کارجو نمایش داده شود.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="job-title">عنوان شغلی</Label>
                    <Input id="job-title" placeholder="مثال: توسعه‌دهنده ارشد React" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company-name">نام شرکت</Label>
                    <Input id="company-name" placeholder="نام شرکت شما" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="location">موقعیت مکانی</Label>
                <Input id="location" placeholder="مثال: تهران، ایران" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="job-type">نوع همکاری</Label>
                    <Select>
                        <SelectTrigger id="job-type">
                            <SelectValue placeholder="انتخاب نوع همکاری" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="full-time">تمام وقت</SelectItem>
                            <SelectItem value="part-time">پاره وقت</SelectItem>
                            <SelectItem value="contract">قراردادی</SelectItem>
                            <SelectItem value="internship">کارآموزی</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="salary">حقوق (اختیاری)</Label>
                    <Input id="salary" placeholder="مثال: توافقی یا ۱۰-۱۵ میلیون تومان" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">شرح مختصر شغل</Label>
                <Textarea 
                    id="description" 
                    placeholder="یک توضیح کوتاه و جذاب درباره موقعیت شغلی (حداکثر ۲۰۰ کاراکتر)" 
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="full-description">شرح کامل شغل</Label>
                <Textarea 
                    id="full-description" 
                    placeholder="جزئیات کامل شغل، مسئولیت‌ها، نیازمندی‌ها و مزایا را در اینجا وارد کنید."
                    rows={10}
                />
            </div>
            
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">ثبت و انتشار آگهی</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
