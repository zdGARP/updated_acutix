import type { Metadata } from 'next';
import BlogPosts from '@/components/BlogPosts';

export const metadata: Metadata = {
  title: 'Insights, Ideas & Technology | Acutix Soft Blog',
  description:
    'Explore practical insights on software development, digital transformation, emerging technologies, and the ideas shaping the future of business.',
};

export default function Blogs() {
  return (
    <main>
      <BlogPosts />
    </main>
  );
}
