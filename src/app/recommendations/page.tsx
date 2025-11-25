import { JobRecommendationForm } from './job-recommendation-form';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">توصیه‌های شغلی هوشمند</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          مهارت‌ها و ترجیحات خود را وارد کنید تا با کمک هوش مصنوعی، بهترین فرصت‌های شغلی را برای شما پیدا کنیم.
        </p>
      </header>
      <JobRecommendationForm />
    </div>
  );
}
