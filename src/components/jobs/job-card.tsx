import Link from 'next/link';
import Image from 'next/image';
import type { Job } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Building, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex-row gap-4 items-start">
        <div className="w-16 h-16 flex-shrink-0">
            <Image 
              src={job.company.logoUrl} 
              alt={`${job.company.name} logo`} 
              width={64} 
              height={64} 
              className="rounded-lg object-contain border p-1"
              data-ai-hint="company logo"
            />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-lg font-headline mb-1">
            <Link href={`/jobs/${job.id}`} className="hover:text-primary transition-colors">{job.title}</Link>
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <Link href={`/companies/${job.company.id}`} className="hover:text-primary transition-colors flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>{job.company.name}</span>
            </Link>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2">
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
        <div className="flex justify-between items-center w-full">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatDate(job.postedDate)}</span>
            </div>
          <Button asChild variant="link" className="p-0 h-auto">
            <Link href={`/jobs/${job.id}`}>بیشتر بخوانید</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
