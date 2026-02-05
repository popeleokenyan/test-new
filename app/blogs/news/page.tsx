import { BlogPosts } from "@/components/BlogPosts";
import { news } from "@/data/app-data";

export default function Page() {
  return <BlogPosts blogs={news} title="News" rows={2} />;
}