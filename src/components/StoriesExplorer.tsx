"use client";

import { useMemo, useState } from "react";
import { StoryCard, StoryCardProps } from "@/components/StoryCard";

interface StoriesExplorerProps {
  categories: string[];
  stories: StoryCardProps[];
}

export function StoriesExplorer({ categories, stories }: StoriesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories = useMemo(() => {
    if (activeCategory === "All") {
      return stories;
    }

    return stories.filter((story) => story.category === activeCategory);
  }, [activeCategory, stories]);

  const featuredStory = filteredStories[0];
  const remainingStories = filteredStories.slice(1);

  return (
    <div>
      <div className="mb-10 rounded-[2rem] border border-warm-100 bg-paper p-3 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-pill px-4 py-2 font-body text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "bg-indigo-600 text-cream"
                  : "text-warm-500 hover:bg-cream"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.18em] text-gold-500">
            Showing
          </p>
          <p className="font-display text-h3 font-semibold text-indigo-700">
            {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}
          </p>
        </div>
        <p className="hidden max-w-sm text-right font-body text-sm text-warm-500 md:block">
          Filter the story archive by field updates, donor stories, partner
          ministry updates, and reflections on generosity.
        </p>
      </div>

      {featuredStory ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <StoryCard {...featuredStory} featured />
          {remainingStories.map((story) => (
            <StoryCard key={story.slug} {...story} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-warm-100 bg-paper p-8 text-center">
          <p className="font-body text-sm text-warm-500">
            No stories match this filter yet.
          </p>
        </div>
      )}
    </div>
  );
}
