// components/page-head.tsx
export function PageHead({
  num,
  title,
  sub,
}: {
  num: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-12 border-b border-border pb-12">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-4">
        § {num}
      </div>
      <h1 className="font-display text-6xl md:text-8xl tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{sub}</p>
    </div>
  );
}
