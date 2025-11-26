
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Edit, Upload, EyeOff, MessageSquare, Bell, Star, Trash2, PlusCircle, Building, GraduationCap, Briefcase, Award } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";

const candidate = {
  name: "سارا حسینی",
  email: "sara.h@example.com",
  phone: "۰۹۱۲۳۴۵۶۷۸۹",
  birthDate: new Date("1995-08-22"),
  address: "تهران، ایران",
  avatarUrl: "https://i.pravatar.cc/150?u=sara",
};

const educationHistory = [
  {
    institution: "دانشگاه تهران",
    field: "مهندسی کامپیوتر",
    degree: "کارشناسی ارشد",
    startDate: "۱۳۹۶",
    endDate: "۱۳۹۸",
  },
  {
    institution: "دانشگاه صنعتی شریف",
    field: "مهندسی نرم‌افزار",
    degree: "کارشناسی",
    startDate: "۱۳۹۲",
    endDate: "۱۳۹۶",
  }
];

const workExperience = [
    {
        title: "توسعه‌دهنده ارشد فرانت‌اند",
        company: "شرکت فناوری نوین",
        startDate: "۱۳۹۹",
        endDate: "تاکنون",
        description: "توسعه و نگهداری اپلیکیشن‌های وب با استفاده از React و TypeScript. همکاری با تیم طراحی برای پیاده‌سازی رابط‌های کاربری مدرن و واکنش‌گرا. بهینه‌سازی عملکرد و بهبود تجربه کاربری."
    },
    {
        title: "توسعه‌دهنده فرانت‌اند",
        company: "استارتاپ راهکار پویا",
        startDate: "۱۳۹۷",
        endDate: "۱۳۹۹",
        description: "پیاده‌سازی ویژگی‌های جدید برای پلتفرم SaaS شرکت. نوشتن کدهای قابل تست و کار با کتابخانه‌های مختلف جاوااسکریپت."
    }
];

const skills = [
    { name: "React.js", level: "پیشرفته" },
    { name: "TypeScript", level: "پیشرفته" },
    { name: "Node.js", level: "متوسط" },
    { name: "Figma", level: "متوسط" },
    { name: "SQL", level: "مبتدی" },
];

const messages = [
    { from: "مدیر استخدام در شرکت نوین", subject: "دعوت به مصاحبه برای موقعیت React Developer", time: "۲ ساعت پیش" },
    { from: "HR در ذهن‌های خلاق", subject: "نتیجه بررسی رزومه شما", time: "۱ روز پیش" },
];

const notifications = [
    { text: "درخواست شما برای شغل 'توسعه‌دهنده ارشد React' مشاهده شد.", time: "۳ ساعت پیش" },
    { text: "آگهی جدیدی مطابق با مهارت 'TypeScript' شما ثبت شد.", time: "۵ ساعت پیش" },
];

const recommendations = [
    { from: "مدیر سابق در شرکت راهکار پویا", text: "سارا یک توسعه‌دهنده بسیار با استعداد و متعهد است. او همیشه به دنبال یادگیری و بهبود مهارت‌های خود بود.", rating: 5 },
    { from: "همکار در شرکت فناوری نوین", text: "کار کردن با سارا تجربه بسیار خوبی است. او در حل مسائل پیچیده عالی عمل می‌کند.", rating: 5 },
];


export default function CandidateProfilePage() {
  const userInitial = candidate.name ? candidate.name.charAt(0) : 'U';

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 bg-muted/40">
      <header className="mb-8 md:mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">مشخصات پروفایل کاندیدا</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          اطلاعات خود را مدیریت کنید تا بهترین فرصت‌های شغلی را پیدا کنید.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 grid gap-8">
            {/* Personal Information */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl">اطلاعات شخصی</CardTitle>
                        <CardDescription>اطلاعات پایه خود را ویرایش کنید.</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon"><Edit className="w-5 h-5" /></Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="w-24 h-24 border-2 border-primary">
                            <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
                            <AvatarFallback className="text-3xl">{userInitial}</AvatarFallback>
                        </Avatar>
                         <div className="grid gap-4 flex-grow">
                             <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="fullName">نام و نام خانوادگی</Label>
                                    <Input id="fullName" defaultValue={candidate.name} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="birthDate">تاریخ تولد</Label>
                                    <DatePicker date={candidate.birthDate} />
                                </div>
                            </div>
                         </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <Label htmlFor="email">آدرس ایمیل</Label>
                            <Input id="email" type="email" defaultValue={candidate.email} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="phone">شماره تلفن</Label>
                            <Input id="phone" defaultValue={candidate.phone} />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="address">آدرس محل سکونت</Label>
                        <Input id="address" defaultValue={candidate.address} />
                    </div>
                </CardContent>
                 <CardFooter className="justify-end">
                    <Button>ذخیره تغییرات</Button>
                </CardFooter>
            </Card>

            {/* Work Experience */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Briefcase />تجربه کاری</CardTitle>
                        <CardDescription>سوابق شغلی خود را اضافه یا ویرایش کنید.</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon"><PlusCircle className="w-5 h-5" /></Button>
                </CardHeader>
                <CardContent className="space-y-6">
                    {workExperience.map((job, index) => (
                        <div key={index} className="relative group pt-4">
                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <h3 className="font-bold">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground">{job.company}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{job.startDate} – {job.endDate}</p>
                                    <p className="text-sm mt-2">{job.description}</p>
                                </div>
                            </div>
                             <div className="absolute top-0 end-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                            {index < workExperience.length - 1 && <Separator className="my-6" />}
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            {/* Education */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2"><GraduationCap />تحصیلات</CardTitle>
                        <CardDescription>سوابق تحصیلی خود را مدیریت کنید.</CardDescription>
                    </div>
                     <Button variant="ghost" size="icon"><PlusCircle className="w-5 h-5" /></Button>
                </CardHeader>
                <CardContent className="space-y-6">
                     {educationHistory.map((edu, index) => (
                        <div key={index} className="relative group pt-4">
                            <h3 className="font-bold">{edu.degree} {edu.field}</h3>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            <p className="text-xs text-muted-foreground mt-1">{edu.startDate} – {edu.endDate}</p>
                             <div className="absolute top-0 end-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                             {index < educationHistory.length - 1 && <Separator className="my-4" />}
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Skills */}
            <Card>
                 <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Award />مهارت‌ها</CardTitle>
                        <CardDescription>مهارت‌های تخصصی خود و سطح آن‌ها را مشخص کنید.</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon"><PlusCircle className="w-5 h-5" /></Button>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                            <Badge key={skill.name} variant="secondary" className="text-sm p-2">
                                {skill.name} <span className="text-muted-foreground ms-2">({skill.level})</span>
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">رزومه و پوشش‌نامه</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button className="w-full"><Upload className="me-2 h-4 w-4"/> بارگذاری رزومه</Button>
                    <Button variant="outline" className="w-full"><Upload className="me-2 h-4 w-4"/> بارگذاری پوشش‌نامه</Button>
                    <p className="text-xs text-muted-foreground text-center">فرمت‌های مجاز: PDF, Word</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">تنظیمات پروفایل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="privacy-mode" className="flex items-center gap-2">
                            <EyeOff className="w-4 h-4" />
                            مخفی‌سازی اطلاعات تماس
                        </Label>
                        <Switch id="privacy-mode" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        با فعال کردن این گزینه، اطلاعات تماس شما (ایمیل و تلفن) از دید کارفرمایان مخفی می‌ماند.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2"><MessageSquare />پیام‌ها</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <p className="font-semibold text-sm truncate">{msg.subject}</p>
                            <p className="text-xs text-muted-foreground">از طرف: {msg.from} - {msg.time}</p>
                             {index < messages.length - 1 && <Separator className="my-3" />}
                        </div>
                    ))}
                    <Button variant="link" className="p-0">مشاهده همه پیام‌ها</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2"><Bell />اطلاعیه‌ها</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {notifications.slice(0,2).map((note, index) => (
                        <div key={index}>
                            <p className="text-sm">{note.text}</p>
                            <p className="text-xs text-muted-foreground">{note.time}</p>
                            {index < notifications.slice(0,2).length - 1 && <Separator className="my-3" />}
                        </div>
                    ))}
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-2"><Star />توصیه‌ها و ارزیابی‌ها</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recommendations.slice(0, 1).map((rec, index) => (
                        <blockquote key={index} className="border-s-4 ps-4 italic">
                            <p className="text-sm">"{rec.text}"</p>
                            <footer className="text-xs text-muted-foreground mt-2">— {rec.from}</footer>
                        </blockquote>
                    ))}
                     <Button variant="link" className="p-0">مشاهده همه توصیه‌ها</Button>
                </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
}

