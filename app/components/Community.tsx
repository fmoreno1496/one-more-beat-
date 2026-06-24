import Reveal from "./Reveal";

// Facebook Group URL — replace FACEBOOK_GROUP_URL with the real link.
// ⚠️ PLACEHOLDER — replace with your real Facebook Group URL once created.
//    This same line also appears in app/components/Footer.tsx — update both.
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/onemorebeatmovement";

export default function Community() {
  return (
    <section
      id="community"
      className="bg-omb-black px-6 pb-40 pt-24 text-omb-white sm:pb-56"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow text-omb-muted-dark">The others</p>
          <h2
            id="community-heading"
            className="mt-10 font-mono text-[clamp(1.5rem,5vw,2.4rem)] font-medium uppercase leading-tight tracking-[0.08em]"
          >
            You don&apos;t have to do this alone.
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-xl font-body text-xl font-light leading-[1.7] text-omb-muted-dark sm:text-[1.35rem]">
            There&apos;s a room full of people who know exactly what a skipped
            beat feels like at 3 a.m. We support each other. We share honestly.
            We keep going together.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow inline-block bg-omb-white px-10 py-5 text-omb-black transition-opacity duration-300 hover:opacity-80"
          >
            Join the Facebook Group
          </a>
        </Reveal>
      </div>
    </section>
  );
}
