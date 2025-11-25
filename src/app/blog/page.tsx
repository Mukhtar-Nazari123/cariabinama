import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog/blog-post-card';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">وبلاگ کاریابی نما</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          جدیدترین مقالات، نکات و راهنماها برای موفقیت در مسیر شغلی شما.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
