import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-display font-semibold text-8xl text-indigo-100 mb-4">
          404
        </p>
        <h1 className="font-display font-semibold text-h2 text-indigo-700 mb-3">
          This page wandered off.
        </h1>
        <p className="font-body text-base text-warm-500 mb-8">
          Try our homepage or browse our story archive.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Go home
          </Button>
          <Button href="/stories" variant="secondary">
            Read stories
          </Button>
        </div>
      </div>
    </section>
  );
}
