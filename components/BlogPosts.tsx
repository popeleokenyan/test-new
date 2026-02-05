import Image from "next/image";
import Link from "next/link";

export function BlogPosts({ blogs, title, rows }: { blogs?: any; title?: string; rows?: number }) {
  return (
    <section className="py-16 px-4 bg-#1f2937">
      <div className="container mx-auto max-w-9xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-8">
          {title || "Blog posts"}
        </h2>

        {/* Blog Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${rows || 3} gap-6 lg:gap-8`}
        >
          {blogs.map((post: any) => (
            <Link
              key={post.id}
              href={"/"}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-12">
                <h3 className="text-3xl font-normal text-gray-800 mb-3 line-clamp-2 group-hover:text-black-600 hover:underline transition-colors text-center">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed line-clamp-3 text-center">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}