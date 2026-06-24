import Link from "next/link";
import Reveal from "./Reveal";
import PhoneFrame from "./PhoneFrame";
import lockscreen from "../../public/downloads/wallpaper-01-founder.png";

export default function RemindersTeaser() {
  return (
    <section
      id="reminders-teaser"
      className="bg-omb-black px-6 pb-40 pt-24 text-omb-white sm:pb-56"
      aria-labelledby="reminders-teaser-heading"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-omb-muted-dark">Free reminders</p>
          <h2
            id="reminders-teaser-heading"
            className="mt-8 font-mono text-[clamp(1.4rem,4.5vw,2.2rem)] font-medium uppercase leading-tight tracking-[0.06em]"
          >
            The reminder that lives where you&apos;ll actually see it.
          </h2>
          <p className="mt-8 max-w-md font-body text-lg font-light leading-[1.7] text-omb-muted-dark sm:text-xl">
            Free wallpapers and watch faces. The same ones on my own phone and
            wrist — so the first thing I see in a hard moment is the only thing I
            need to remember.
          </p>
          <Link
            href="/reminders"
            className="eyebrow mt-12 inline-block border border-omb-line-dark px-8 py-4 text-omb-white transition-colors duration-300 hover:border-omb-white"
          >
            Get them free →
          </Link>
        </Reveal>

        <Reveal delay={120} className="flex justify-center">
          <PhoneFrame src={lockscreen} alt="OMB wallpaper on a phone lock screen" />
        </Reveal>
      </div>
    </section>
  );
}
