import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-auto">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-sm max-w-xs text-center md:text-start">
              پلتفرم کاریابی برای یافتن شغل رویایی شما.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-start">
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-3">کاوش</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/jobs" className="hover:text-primary transition-colors">مشاغل</Link>
                <Link href="/blog" className="hover:text-primary transition-colors">وبلاگ</Link>
                <Link href="/recommendations" className="hover:text-primary transition-colors">توصیه‌ها</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-3">شرکت</h4>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="hover:text-primary transition-colors">درباره ما</Link>
                <Link href="#" className="hover:text-primary transition-colors">تماس با ما</Link>
                <Link href="#" className="hover:text-primary transition-colors">حریم خصوصی</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} کاریابی نما. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
