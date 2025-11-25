import Image from 'next/image';
import { JobSearchForm } from '@/components/jobs/job-search-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredJobs } from '@/lib/data';
import Link from 'next/link';
import { MapPin, Briefcase, Building } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
