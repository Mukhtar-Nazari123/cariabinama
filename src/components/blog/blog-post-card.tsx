import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video relative">
            <Image
            src={post.image.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={post.image.imageHint}
            />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          نوشته {post.author} در {formatDate(post.date)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all duration-300">
          بیشتر بخوانید
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
