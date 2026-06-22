import Link from "next/link";
import Image from "next/image";

interface StoryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
}

export function StoryCard({
  slug,
  title,
  excerpt,
  category,
  date,
  image,
  imageAlt,
}: StoryCardProps) {
  return (
    <article className="group bg-paper rounded-xl overflow-hidden border border-warm-100 hover:shadow-md transition-shadow duration-200">
      <Link href={`/stories/${slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-xs font-medium tracking-wider uppercase text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
              {category}
            </span>
            <time className="font-body text-xs text-warm-300" dateTime={date}>
              {new Date(date + "T00:00:00").toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <h3 className="font-display font-semibold text-h3 text-indigo-700 mb-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="font-body text-sm text-warm-500 line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
