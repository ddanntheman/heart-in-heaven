import Link from "next/link";
import Image from "next/image";

export interface StoryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export function StoryCard({
  slug,
  title,
  excerpt,
  category,
  date,
  image,
  imageAlt,
  featured = false,
}: StoryCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-warm-100 bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""
      }`}
    >
      <Link href={`/stories/${slug}`} className="block h-full lg:contents">
        <div className={`relative overflow-hidden ${featured ? "min-h-80" : "aspect-[16/11]"}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 to-transparent p-5">
            <span className="font-body text-xs font-semibold tracking-[0.18em] uppercase text-gold-300">
              {category}
            </span>
          </div>
        </div>
        <div className={`flex flex-col ${featured ? "p-7 md:p-9" : "p-6"}`}>
          <time className="font-body text-xs text-warm-300" dateTime={date}>
            {new Date(date + "T00:00:00").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <h3 className={`mt-3 font-display font-semibold text-indigo-700 transition-colors group-hover:text-indigo-600 ${featured ? "text-h2" : "text-h3"}`}>
            {title}
          </h3>
          <p className={`mt-3 font-body text-sm leading-relaxed text-warm-500 ${featured ? "line-clamp-4" : "line-clamp-3"}`}>
            {excerpt}
          </p>
          <span className="mt-6 inline-flex font-body text-sm font-semibold text-gold-600">
            Read story &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
