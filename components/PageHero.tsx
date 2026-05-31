import Reveal from "./Reveal";

export default function PageHero({
  title,
  lead,
  kicker,
}: {
  title: string;
  lead: string;
  kicker?: string;
}) {
  return (
    <section className="container-x pt-16 pb-12 sm:pt-24">
      {kicker && (
        <p className="label reveal text-clay">{kicker}</p>
      )}
      <h1
        className="display reveal mt-6 text-6xl sm:text-8xl"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      <Reveal delay={160}>
        <p className="mt-8 max-w-prose2 text-lg font-light leading-relaxed text-ink-soft">
          {lead}
        </p>
      </Reveal>
    </section>
  );
}
