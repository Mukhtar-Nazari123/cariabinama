import { allJobs, blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, ExternalLink } from 'lucide-react';
import { JobCard } from '@/components/jobs/job-card';

export default function CompanyProfilePage({ params }: { params: { id: string } }) {
  const companyJobs = allJobs.filter((j) => j.company.id === params.id);
  
  if (companyJobs.length === 0) {
    const companyExistsWithNoJobs = allJobs.find(job => job.company.id === params.id);
    if(!companyExistsWithNoJobs) {
        // A real app would check a company DB. For now, if no jobs, assume no company.
        notFound();
    }
  }

  const company = companyJobs[0].company;
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <Card className="mb-12 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-48 bg-muted">
             <Image 
                src="https://picsum.photos/seed/company-banner/1200/300"
                alt={`${company.name} banner`}
                fill
                className="object-cover"
                data-ai-hint="abstract background"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-6 flex flex-col md:flex-row gap-6 -mt-16 items-end">
            <div className="relative flex-shrink-0">
                <Image 
                    src={company.logoUrl} 
                    alt={`${company.name} logo`} 
                    width={128} 
                    height={128} 
                    className="rounded-xl border-4 border-background bg-background object-contain"
                    data-ai-hint="company logo"
                />
            </div>
            <div className="flex-grow pt-16">
                <h1 className="font-headline text-3xl md:text-4xl font-bold">{company.name}</h1>
                <p className="mt-2 text-muted-foreground max-w-2xl">{company.description}</p>
            </div>
            <div className="flex-shrink-0">
                <Button variant="outline" asChild>
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="me-2 h-4 w-4" />
                    وب‌سایت
                  </a>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="font-headline text-2xl md:text-3xl font-bold mb-6">فرصت‌های شغلی فعال</h2>
        {companyJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        ) : (
            <p className="text-muted-foreground text-center py-8">در حال حاضر این شرکت آگهی شغلی فعالی ندارد.</p>
        )}
      </div>
    </div>
  );
}
