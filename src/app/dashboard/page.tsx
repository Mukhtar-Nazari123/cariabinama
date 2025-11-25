import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, MapPin, Search, Trash2, Edit } from "lucide-react";

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


export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8 md:mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">داشبورد کاربری</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                هشدارهای شغلی خود را مدیریت کنید و هرگز یک فرصت عالی را از دست ندهید.
            </p>
        </header>

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

    </div>
  );
}
