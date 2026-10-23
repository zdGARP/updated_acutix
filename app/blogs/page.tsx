import BlogPosts from '@/components/BlogPosts';
import styles from './blogs.module.css';

export default function Blogs() {
  return (
    <main className={`${styles.blogs} blogs-page pt-32 pb-12`}>
      <BlogPosts />
    </main>
  );
}
