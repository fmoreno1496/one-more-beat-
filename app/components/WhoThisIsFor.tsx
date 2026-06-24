import Reveal from "./Reveal";

const LINES = [
  "For the person checking their pulse.",
  "For the person afraid to exercise.",
  "For the person carrying a fear nobody else can see.",
  "For the person trying to keep going.",
];

export default function WhoThisIsFor() {
  return (
    <section
      id="who"
      className="bg-omb-black px-6 pb-40 pt-24 text-omb-white sm:pb-56"
      aria-labelledby="who-heading"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow text-omb-muted-dark">Who This Is For</p>
        </Reveal>

        <div className="mt-20 space-y-14">
          {LINES.map((line, i) => (
            <Reveal key={i}>
              <p className="font-display text-[clamp(1.5rem,3.8vw,2.2rem)] font-light leading-[1.25]">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28">
          <h2
            id="who-heading"
            className="font-mono text-[clamp(1.6rem,5vw,2.6rem)] font-medium uppercase tracking-[0.08em]"
          >
            You are not alone.
          </h2>
        </Reveal>

        <Reveal className="mt-40">
          <p className="font-mono text-[clamp(1.1rem,3.6vw,1.6rem)] font-medium uppercase leading-[1.9] tracking-[0.18em] text-omb-muted-dark">
            One More Beat.
            <br />
            One More Breath.
            <br />
            One More Day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
