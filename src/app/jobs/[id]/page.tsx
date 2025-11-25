import { allJobs } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Building, Clock, DollarSign, ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = allJobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <header className="mb-8 p-6 bg-background rounded-lg border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Image 
              src={job.company.logoUrl} 
              alt={`${job.company.name} logo`} 
              width={100} 
              height={100} 
              className="rounded-lg border object-contain p-2" 
              data-ai-hint="company logo"
            />
            <div className="flex-grow">
              <h1 className="font-headline text-3xl md:text-4xl font-bold">{job.title}</h1>
              <Link href={`/companies/${job.company.id}`} className="text-lg text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-2">
                <Building className="w-5 h-5" />
                {job.company.name}
              </Link>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</div>
                <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{job.type}</div>
                {job.salary && <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" />{job.salary}</div>}
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">ارسال رزومه</Button>
              <p className="text-xs text-muted-foreground mt-2 text-center flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                آگهی در تاریخ {formatDate(job.postedDate)} منتشر شده است.
              </p>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">شرح شغل</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="prose prose-sm md:prose-base max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: job.fullDescription }}
                />
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">درباره {job.company.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{job.company.description}</p>
                <Separator />
                <Button variant="outline" asChild>
                  <a href={job.company.website} target="_blank" rel="noopener noreferrer">
                    وب‌سایت شرکت
                    <ExternalLink className="ms-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
