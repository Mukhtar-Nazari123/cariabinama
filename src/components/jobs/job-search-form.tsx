"use client";

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

export function JobSearchForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-background p-4 rounded-lg border shadow-sm">
      <div className="relative md:col-span-2">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="عنوان شغلی، کلمه کلیدی یا شرکت"
          className="ps-10 w-full h-12 text-base"
        />
      </div>
      <div className="relative md:col-span-2">
        <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="شهر، استان یا کشور"
          className="ps-10 w-full h-12 text-base"
        />
      </div>
      <Button type="submit" className="md:col-span-1 h-12 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/90">
        جستجو
      </Button>
    </form>
  );
}
