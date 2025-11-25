import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, MapPin, Search, Trash2, Edit, PlusCircle, FileDown, MoreHorizontal, Users, UserCheck, UserX, Eye, MessageSquare, Reply } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const alerts = [
  {
    id: 1,
    keyword: "توسعه‌دهنده React",
    location: "تهران",
    active: true,
  },
  {
    id: 2,
    keyword: "مدیر محصول",
    location: "دورکاری",
    active: true,
  },
  {
    id: 3,
    keyword: "طراح UI/UX",
    location: "اصفهان",
    active: false,
  },
];

const managedJobs = [
    {
        id: "JOB001",
        title: "توسعه‌دهنده ارشد React",
        company: "راهکارهای فناوری نوین",
        views: 1250,
        applications: 85,
        status: "فعال",
        postedDate: "2024-05-20",
    },
    {
        id: "JOB002",
        title: "متخصص بازاریابی دیجیتال",
        company: "ذهن‌های خلاق",
        views: 850,
        applications: 42,
        status: "فعال",
        postedDate: "2024-05-19",
    },
    {
        id: "JOB003",
        title: "تحلیلگر داده",
        company: "نوآوران داده",
        views: 250,
        applications: 15,
        status: "در حال بررسی",
        postedDate: "2024-05-25",
    },
    {
        id: "JOB004",
        title: "مهندس نرم‌افزار",
        company: "راهکارهای فناوری نوین",
        views: 2500,
        applications: 150,
        status: "منقضی شده",
        postedDate: "2024-04-10",
    },
    {
        id: "JOB005",
        title: "کارآموز طراحی UI/UX",
        company: "ذهن‌های خلاق",
        views: 600,
        applications: 95,
        status: "فعال",
        postedDate: "2024-05-22",
    },
];

const users = [
    {
        id: "USR001",
        fullName: "سارا حسینی",
        email: "sara.h@example.com",
        type: "کاندیدا",
        status: "فعال",
        registeredDate: "2024-05-10",
    },
    {
        id: "USR002",
        fullName: "راهکارهای فناوری نوین",
        email: "hr@tech-solutions.com",
        type: "کارفرما",
        status: "فعال",
        registeredDate: "2024-04-22",
    },
    {
        id: "USR003",
        fullName: "امیر قاسمی",
        email: "amir.q@example.com",
        type: "کاندیدا",
        status: "غیرفعال",
        registeredDate: "2024-03-15",
    },
    {
        id: "USR004",
        fullName: "ذهن‌های خلاق",
        email: "contact@creative.com",
        type: "کارفرما",
        status: "فعال",
        registeredDate: "2024-05-01",
    },
    {
        id: "USR005",
        fullName: "رضا محمودی",
        email: "reza.m@example.com",
        type: "کاندیدا",
        status: "فعال",
        registeredDate: "2024-05-18",
    },
];

const userComments = [
    {
        id: 1,
        name: "شبنم ریاحی",
        avatar: "https://i.pravatar.cc/150?u=shabnam",
        comment: "سایت شما بهترین تجربه کاریابی را برای من رقم زد. پیدا کردن شغل در حوزه سئو هیچ‌وقت به این سادگی نبود!",
        timestamp: "۲ ساعت پیش",
    },
    {
        id: 2,
        name: "مهدی یوسفی",
        avatar: "https://i.pravatar.cc/150?u=mahdi",
        comment: "به‌عنوان یک دانشجو، پیدا کردن دوره کارآموزی مناسب خیلی سخت بود، اما با سایت شما موفق شدم. ممنون!",
        timestamp: "۱ روز پیش",
    },
    {
        id: 3,
        name: "ایمان کریمی",
        avatar: "https://i.pravatar.cc/150?u=iman",
        comment: "قابلیت هشدارهای شغلی شما فوق‌العاده است. یک موقعیت تخصصی مهندسی برق پیدا کردم که عالی بود.",
        timestamp: "۳ روز پیش",
    },
];

const getJobStatusVariant = (status: string) => {
    switch (status) {
        case "فعال":
        return "default";
        case "در حال بررسی":
        return "secondary";
        case "منقضی شده":
        return "destructive";
        default:
        return "outline";
    }
}

const getUserStatusVariant = (status: string) => {
    switch (status) {
        case "فعال":
        return "default";
        case "غیرفعال":
        return "secondary";
        default:
        return "outline";
    }
}

const JobTable = ({jobs}: {jobs: typeof managedJobs}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>عنوان شغل</TableHead>
                <TableHead className="hidden sm:table-cell">شرکت</TableHead>
                <TableHead className="hidden md:table-cell">بازدید</TableHead>
                <TableHead className="hidden md:table-cell">درخواست</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead><span className="sr-only">عملیات</span></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {jobs.map((job) => (
                <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell className="hidden sm:table-cell">{job.company}</TableCell>
                    <TableCell className="hidden md:table-cell">{job.views.toLocaleString('fa-IR')}</TableCell>
                    <TableCell className="hidden md:table-cell">{job.applications.toLocaleString('fa-IR')}</TableCell>
                    <TableCell>
                        <Badge variant={getJobStatusVariant(job.status) as any}>{job.status}</Badge>
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Edit className="me-2 h-4 w-4" />
                                    ویرایش
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash2 className="me-2 h-4 w-4" />
                                    حذف
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  );


const UserTable = ({users}: {users: typeof users}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>نام و نام خانوادگی</TableHead>
                <TableHead className="hidden sm:table-cell">نوع کاربر</TableHead>
                <TableHead className="hidden md:table-cell">تاریخ ثبت‌نام</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead><span className="sr-only">عملیات</span></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell className="font-medium">
                        <div className="font-bold">{user.fullName}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{user.type}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.registeredDate}</TableCell>
                    <TableCell>
                        <Badge variant={getUserStatusVariant(user.status) as any}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>عملیات کاربر</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Eye className="me-2 h-4 w-4" />
                                    مشاهده پروفایل
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <UserCheck className="me-2 h-4 w-4" />
                                    فعال‌سازی
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <UserX className="me-2 h-4 w-4" />
                                    غیرفعال‌سازی
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash2 className="me-2 h-4 w-4" />
                                    حذف حساب
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)


export default function DashboardPage() {
  const activeJobs = managedJobs.filter(job => job.status === 'فعال');
  const pendingJobs = managedJobs.filter(job => job.status === 'در حال بررسی');
  const expiredJobs = managedJobs.filter(job => job.status === 'منقضی شده');
    
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">داشبورد کاربری</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                آگهی‌ها، کاربران و هشدارهای شغلی خود را در یک مکان مدیریت کنید.
            </p>
        </header>
        
        <Tabs defaultValue="job-management">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="job-management">مدیریت آگهی‌های شغلی</TabsTrigger>
                <TabsTrigger value="user-management">مدیریت کاربران</TabsTrigger>
                <TabsTrigger value="job-alerts">هشدارهای شغلی</TabsTrigger>
            </TabsList>
            <TabsContent value="job-management" className="mt-6">
                <Card>
                    <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <CardTitle className="font-headline text-2xl">مدیریت آگهی‌های شغلی</CardTitle>
                            <CardDescription>
                                آگهی‌های خود را ویرایش، حذف یا آمار آن‌ها را مشاهده کنید.
                            </CardDescription>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                            <Button variant="outline">
                                <FileDown className="me-2 h-4 w-4" />
                                خروجی
                            </Button>
                            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/dashboard/post-job">
                                    <PlusCircle className="me-2 h-4 w-4" />
                                    ثبت آگهی جدید
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="active">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                <TabsList>
                                    <TabsTrigger value="active">فعال</TabsTrigger>
                                    <TabsTrigger value="pending">در حال بررسی</TabsTrigger>
                                    <TabsTrigger value="expired">منقضی شده</TabsTrigger>
                                </TabsList>
                                <div className="relative w-full sm:w-auto sm:max-w-xs">
                                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="جستجوی آگهی..." className="ps-10" />
                                </div>
                            </div>
                             <TabsContent value="active" className="mt-4">
                               <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>عنوان شغل</TableHead>
                                            <TableHead className="hidden sm:table-cell">شرکت</TableHead>
                                            <TableHead className="hidden md:table-cell">بازدید</TableHead>
                                            <TableHead className="hidden md:table-cell">درخواست</TableHead>
                                            <TableHead>وضعیت</TableHead>
                                            <TableHead><span className="sr-only">عملیات</span></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {activeJobs.map((job) => (
                                            <TableRow key={job.id}>
                                                <TableCell className="font-medium">{job.title}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{job.company}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.views.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.applications.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getJobStatusVariant(job.status) as any}>{job.status}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                                                            <DropdownMenuItem>
                                                                <Edit className="me-2 h-4 w-4" />
                                                                ویرایش
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                                                <Trash2 className="me-2 h-4 w-4" />
                                                                حذف
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                             <TabsContent value="pending" className="mt-4">
                               <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>عنوان شغل</TableHead>
                                            <TableHead className="hidden sm:table-cell">شرکت</TableHead>
                                            <TableHead className="hidden md:table-cell">بازدید</TableHead>
                                            <TableHead className="hidden md:table-cell">درخواست</TableHead>
                                            <TableHead>وضعیت</TableHead>
                                            <TableHead><span className="sr-only">عملیات</span></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {pendingJobs.map((job) => (
                                            <TableRow key={job.id}>
                                                <TableCell className="font-medium">{job.title}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{job.company}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.views.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.applications.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getJobStatusVariant(job.status) as any}>{job.status}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                                                            <DropdownMenuItem>
                                                                <Edit className="me-2 h-4 w-4" />
                                                                ویرایش
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                                                <Trash2 className="me-2 h-4 w-4" />
                                                                حذف
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                            <TabsContent value="expired" className="mt-4">
                                 <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>عنوان شغل</TableHead>
                                            <TableHead className="hidden sm:table-cell">شرکت</TableHead>
                                            <TableHead className="hidden md:table-cell">بازدید</TableHead>
                                            <TableHead className="hidden md:table-cell">درخواست</TableHead>
                                            <TableHead>وضعیت</TableHead>
                                            <TableHead><span className="sr-only">عملیات</span></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {expiredJobs.map((job) => (
                                            <TableRow key={job.id}>
                                                <TableCell className="font-medium">{job.title}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{job.company}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.views.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell className="hidden md:table-cell">{job.applications.toLocaleString('fa-IR')}</TableCell>
                                                <TableCell>
                                                    <Badge variant={getJobStatusVariant(job.status) as any}>{job.status}</Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Toggle menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                                                            <DropdownMenuItem>
                                                                <Edit className="me-2 h-4 w-4" />
                                                                ویرایش
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                                                <Trash2 className="me-2 h-4 w-4" />
                                                                حذف
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="user-management" className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Users className="w-6 h-6"/>مدیریت کاربران</CardTitle>
                        <CardDescription>
                            کاربران ثبت‌نام شده را مشاهده و مدیریت کنید.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                           <div className="relative w-full sm:w-auto sm:max-w-xs">
                                <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="جستجو بر اساس نام یا ایمیل..." className="ps-10" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="فیلتر بر اساس نوع" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">همه کاربران</SelectItem>
                                    <SelectItem value="candidate">کاندیدا</SelectItem>
                                    <SelectItem value="employer">کارفرما</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <UserTable users={users} />
                    </CardContent>
                </Card>
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-2">
                           <MessageSquare className="w-6 h-6"/> پیغام‌ها و نظرات کاربران
                        </CardTitle>
                        <CardDescription>
                            بازخوردهای دریافتی از کاربران را در اینجا بررسی کنید.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                       {userComments.length > 0 ? (
                            <div className="space-y-6">
                                {userComments.map((comment) => (
                                    <div key={comment.id} className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={comment.avatar} alt={comment.name} />
                                            <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold">{comment.name}</p>
                                                <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{comment.comment}</p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <Button variant="ghost" size="sm">
                                                    <Reply className="me-2 h-4 w-4" />
                                                    پاسخ
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                                                    <Trash2 className="me-2 h-4 w-4" />
                                                    حذف
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-muted-foreground py-8">
                                در حال حاضر هیچ نظر جدیدی وجود ندارد.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="job-alerts" className="mt-6">
                <div className="grid gap-12 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                   <Bell className="w-6 h-6"/> ایجاد هشدار جدید
                                </CardTitle>
                                <CardDescription>
                                    معیارهای خود را برای دریافت اعلان‌های شغلی وارد کنید.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="keyword">کلمه کلیدی</Label>
                                    <div className="relative">
                                        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input id="keyword" placeholder="مثال: Node.js" className="ps-10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">مکان</Label>
                                     <div className="relative">
                                        <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input id="location" placeholder="مثال: تهران" className="ps-10"/>
                                    </div>
                                </div>
                                 <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">ذخیره هشدار</Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                         <h2 className="font-headline text-2xl font-bold mb-4">هشدارهای فعال شما</h2>
                         <div className="space-y-4">
                            {alerts.map(alert => (
                                <Card key={alert.id} className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-4">
                                        <Switch id={`alert-${alert.id}`} checked={alert.active} aria-label="فعال/غیرفعال کردن هشدار" />
                                        <div>
                                            <p className="font-semibold">{alert.keyword}</p>
                                            <p className="text-sm text-muted-foreground">{alert.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" aria-label="ویرایش">
                                            <Edit className="w-5 h-5 text-muted-foreground" />
                                        </Button>
                                        <Button variant="ghost" size="icon" aria-label="حذف">
                                            <Trash2 className="w-5 h-5 text-destructive" />
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                         </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>

    </div>
  );
}
