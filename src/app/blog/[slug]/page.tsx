import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const authorInitial = post.author.charAt(0);

  return (
    <article>
      <header className="py-12 md:py-16 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} alt={post.author}/>
                <AvatarFallback>{authorInitial}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 my-8 md:my-12">
        <div className="relative aspect-video max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden">
            <Image 
                src={post.image.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.image.imageHint}
            />
        </div>

        <div
          className="prose prose-lg max-w-3xl mx-auto text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
