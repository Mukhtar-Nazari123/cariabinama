import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-auto">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 items-start col-span-1 md:col-span-1">
            <Logo />
            <p className="text-sm">
              پلتفرم کاریابی برای یافتن شغل رویایی شما. به هزاران کارجو و کارفرما بپیوندید.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-4">کاوش</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/jobs" className="hover:text-primary transition-colors">مشاغل</Link>
                <Link href="/recommendations" className="hover:text-primary transition-colors">توصیه‌های هوشمند</Link>
                <Link href="/blog" className="hover:text-primary transition-colors">وبلاگ</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-4">شرکت</h4>
              <nav className="flex flex-col gap-3">
                <Link href="#" className="hover:text-primary transition-colors">درباره ما</Link>
                <Link href="#" className="hover:text-primary transition-colors">شرایط و قوانین</Link>
                <Link href="#" className="hover:text-primary transition-colors">حریم خصوصی</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-headline font-semibold text-foreground mb-4">تماس با ما</h4>
              <nav className="flex flex-col gap-3">
                <a href="mailto:info@example.com" className="hover:text-primary transition-colors">info@karyabinama.com</a>
                <a href="tel:+982112345678" className="hover:text-primary transition-colors">۰۲۱-۱۲۳۴۵۶۷۸</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} کاریابی نما. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
             <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
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
