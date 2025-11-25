import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="بازگشت به صفحه اصلی">
      <Briefcase className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        کاریابی نما
      </span>
    </Link>
  );
}
