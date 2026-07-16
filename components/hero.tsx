import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:px-6">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.15),transparent_60%)]"
      />

      {/* Small badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Now in public beta
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Build your SaaS{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent dark:from-emerald-300 dark:to-teal-400">
          in days, not months
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
        Production-ready components and templates so you can ship faster and
        focus on what makes your product unique.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="px-8">
          Get started
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          View components
        </Button>
      </div>
    </section>
  );
}