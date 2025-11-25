import Image from 'next/image';
import { JobSearchForm } from '@/components/jobs/job-search-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredJobs } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Briefcase, Building, Code, Users, TrendingUp, Palette, HeartPulse, Megaphone, Cog, Landmark, Handshake } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const jobCategories = [
  {
    name: 'فناوری اطلاعات',
    icon: <Code className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-it")!,
    href: '/jobs?category=it',
  },
  {
    name: 'مدیریت',
    icon: <Users className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-management")!,
    href: '/jobs?category=management',
  },
  {
    name: 'فروش',
    icon: <TrendingUp className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-sales")!,
    href: '/jobs?category=sales',
  },
  {
    name: 'طراحی',
    icon: <Palette className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-design")!,
    href: '/jobs?category=design',
  },
    {
    name: 'بهداشت و درمان',
    icon: <HeartPulse className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-healthcare")!,
    href: '/jobs?category=healthcare',
  },
  {
    name: 'مهندسی',
    icon: <Cog className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-engineering")!,
    href: '/jobs?category=engineering',
  },
  {
    name: 'مالی',
    icon: <Landmark className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-finance")!,
    href: '/jobs?category=finance',
  },
  {
    name: 'بازاریابی',
    icon: <Megaphone className="w-8 h-8" />,
    image: PlaceHolderImages.find(p => p.id === "category-marketing")!,
    href: '/jobs?category=marketing',
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-background-1");

  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-primary-foreground">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              شغل رویایی خود را پیدا کنید
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              هزاران فرصت شغلی از بهترین شرکت‌ها را در کاریابی نما جستجو کنید.
            </p>
            <div className="w-full max-w-2xl mt-4">
              <JobSearchForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 -mt-8 md:-mt-12 lg:-mt-20">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">دسته‌بندی مشاغل</h2>
          <p className="text-muted-foreground max-w-2xl">
            مشاغل را بر اساس دسته‌بندی‌های محبوب مرور کنید.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {jobCategories.map((category) => (
            <Link href={category.href} key={category.name} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                src={category.image.imageUrl}
                alt={category.name}
                width={400}
                height={200}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                data-ai-hint={category.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-0 start-0 p-4 text-white">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full inline-block mb-2">
                   {category.icon}
                </div>
                <h3 className="font-headline text-lg font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">مشاغل ویژه</h2>
          <p className="text-muted-foreground max-w-2xl">
            نگاهی به آخرین فرصت‌های شغلی از شرکت‌های برتر بیندازید.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex-row gap-4 items-start">
                <div className="w-16 h-16 flex-shrink-0">
                  <Image src={job.company.logoUrl} alt={`${job.company.name} logo`} width={64} height={64} className="rounded-lg object-contain border" data-ai-hint="company logo" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-headline mb-1">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Building className="w-4 h-4" />
                    <span>{job.company.name}</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={`/jobs/${job.id}`}>مشاهده جزئیات</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/jobs">مشاهده همه مشاغل</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
