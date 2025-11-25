import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, MapPin, Search, Trash2, Edit, PlusCircle, FileDown, MoreHorizontal } from "lucide-react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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

const getStatusVariant = (status: string) => {
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

export default function DashboardPage() {
  const activeJobs = managedJobs.filter(job => job.status === 'فعال');
  const pendingJobs = managedJobs.filter(job => job.status === 'در حال بررسی');
  const expiredJobs = managedJobs.filter(job => job.status === 'منقضی شده');
    
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
                        <Badge variant={getStatusVariant(job.status) as any}>{job.status}</Badge>
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

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">داشبورد کاربری</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                آگهی‌ها و هشدارهای شغلی خود را در یک مکان مدیریت کنید.
            </p>
        </header>
        
        <Tabs defaultValue="job-management">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="job-management">مدیریت آگهی‌های شغلی</TabsTrigger>
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
                            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <PlusCircle className="me-2 h-4 w-4" />
                                ثبت آگهی جدید
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
                                <JobTable jobs={activeJobs} />
                            </TabsContent>
                            <TabsContent value="pending" className="mt-4">
                                <JobTable jobs={pendingJobs} />
                            </TabsContent>
                            <TabsContent value="expired" className="mt-4">
                                <JobTable jobs={expiredJobs} />
                            </TabsContent>
                        </Tabs>
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
