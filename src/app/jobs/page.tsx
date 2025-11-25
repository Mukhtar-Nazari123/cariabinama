import { JobSearchForm } from "@/components/jobs/job-search-form";
import { JobCard } from "@/components/jobs/job-card";
import { allJobs } from "@/lib/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">جستجوی مشاغل</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          فرصت شغلی بعدی خود را در میان هزاران آگهی از شرکت‌های برتر پیدا کنید.
        </p>
      </header>

      <div className="mb-8">
        <JobSearchForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
