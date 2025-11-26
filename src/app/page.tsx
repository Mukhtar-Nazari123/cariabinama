"use client";

import Image from 'next/image';
import { JobSearchForm } from '@/components/jobs/job-search-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredJobs, testimonials } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Briefcase, Building, Code, Users, TrendingUp, Palette, HeartPulse, Megaphone, Cog, Landmark, Handshake, Star, Clock, BrainCircuit, Headset, ThumbsUp, BriefcaseBusiness, UserRoundPlus, Building2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from 'react';


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

const benefits = [
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "آگهی‌های به‌روز",
    description: "به‌روزترین آگهی‌ها را هر روز مشاهده کنید و اولین نفر باشید که اقدام می‌کند.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "تشخیص شغل بر اساس مهارت",
    description: "با هوش مصنوعی، شغل‌هایی را پیدا کنید که دقیقاً با مهارت‌های شما مطابقت دارند.",
  },
  {
    icon: <Headset className="w-10 h-10 text-primary" />,
    title: "پشتیبانی ۲۴ ساعته",
    description: "در هر زمان و هر مکان، تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    title: "تجربه کاربری عالی",
    description: "با طراحی ساده و کاربرپسند، سریع‌تر و راحت‌تر شغل مورد نظر خود را پیدا کنید.",
  },
];

const stats = [
  {
    icon: <BriefcaseBusiness className="w-10 h-10 text-primary" />,
    value: "500+",
    label: "شغل موجود",
    description: "با 500+ آگهی شغلی در دسترس، گزینه‌های بی‌نظیری برای شما داریم."
  },
  {
    icon: <UserRoundPlus className="w-10 h-10 text-primary" />,
    value: "10,000+",
    label: "کارجوی ثبت‌نام شده",
    description: "10,000+ کارجو از خدمات ما بهره‌مند شده‌اند و به جامعه ما پیوسته‌اند."
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary" />,
    value: "600+",
    label: "کارفرمای فعال",
    description: "600+ کارفرما برای یافتن بهترین استعدادها به ما اعتماد کرده‌اند."
  }
];


export default function Home() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith("hero-background-"));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [heroImages.length]);

  const currentImage = heroImages[currentImageIndex];


  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center">
        {heroImages.map((image, index) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt={image.description}
            fill
            className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            data-ai-hint={image.imageHint}
            priority={index === 0}
          />
        ))}
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

      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">چرا کاریابی نما؟</h2>
            <p className="text-muted-foreground max-w-2xl">
              ما بهترین ابزارها و امکانات را برای ساختن آینده شغلی شما فراهم کرده‌ایم.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="font-headline text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/signup">اکنون ثبت‌نام کنید</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
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

      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">آمار کلیدی ما</h2>
            <p className="text-muted-foreground max-w-2xl">
              ما به هزاران کاربر و کارفرما خدمات ارائه می‌دهیم. در اینجا آمار کلیدی وب‌سایت ما را مشاهده کنید.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {stat.icon}
                </div>
                <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                <h3 className="font-headline text-xl font-semibold mt-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-xs">{stat.description}</p>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/signup">اکنون به جمع ما بپیوندید!</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">نظرات کاربران و تجربیات موفق</h2>
            <p className="text-muted-foreground max-w-2xl">
              بیش از هزاران کاربر از خدمات ما بهره‌مند شده‌اند. در اینجا نظرات و تجربیات برخی از آن‌ها را مشاهده کنید.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-background h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-foreground/90 italic border-s-4 border-primary ps-4">
                          {testimonial.comment}
                        </blockquote>
                      </CardContent>
                      <CardFooter className="flex items-center gap-4 pt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.job}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
           <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#">شما هم تجربه خود را به اشتراک بگذارید!</Link>
            </Button>
        </div>
        </div>
      </section>

    </div>
  );
}
