import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import PhoneFrame from "../components/PhoneFrame";
import WatchFrame from "../components/WatchFrame";
import Collapsible from "../components/Collapsible";

import wp01 from "../../public/downloads/wallpaper-01-founder.png";
import wp02 from "../../public/downloads/wallpaper-02-community.png";
import watchMin from "../../public/downloads/watch-minimal.png";
import watchBadge from "../../public/downloads/watch-badge.png";

export const metadata: Metadata = {
  title: "Free Reminders",
  description:
    "Free wallpapers and watch faces from One More Beat. The reminder that lives where you'll actually see it. Take them. Keep going.",
  alternates: { canonical: "https://onemorebeatmovement.com/reminders" },
};

const wallpapers = [
  {
    src: wp02,
    file: "/downloads/wallpaper-02-community.png",
    label: "Wallpaper 02 — Community",
    note: "The whole mantra, where you'll see it at 3 a.m.",
    clock: true,
  },
];

function DownloadButton({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      download={name}
      className="eyebrow inline-block bg-omb-white px-8 py-4 text-omb-black transition-opacity duration-300 hover:opacity-80"
    >
      Download
    </a>
  );
}

export default function RemindersPage() {
  return (
    <>
      <Nav />
      <main className="bg-omb-black text-omb-white">
        {/* Intro */}
        <section className="px-6 pb-28 pt-40 sm:pt-48" aria-labelledby="reminders-heading">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow text-omb-muted-dark">Free Reminders</p>
              <h1
                id="reminders-heading"
                className="mt-10 font-mono text-[clamp(1.6rem,5.5vw,2.8rem)] font-medium uppercase leading-tight tracking-[0.06em]"
              >
                I made these for myself first.
              </h1>
            </Reveal>
            <Reveal className="mt-10">
              <p className="mx-auto max-w-xl font-body text-xl font-light leading-[1.7] text-omb-muted-dark sm:text-[1.35rem]">
                They live on my lock screen and my watch — so that in the moments
                fear gets loud, the first thing I see is{" "}
                <em className="text-omb-white">the only thing I need to remember.</em>
              </p>
              <p className="mt-8 font-body text-xl font-light leading-[1.7] text-omb-muted-dark sm:text-[1.35rem]">
                They&apos;re free. Take them. Keep going.
              </p>
              <p className="eyebrow mt-10 text-omb-muted-dark">— Fernando</p>
            </Reveal>
          </div>
        </section>

        {/* Phone Wallpapers */}
        <section className="border-t border-omb-line-dark px-6 py-28" aria-labelledby="wallpapers-heading">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 id="wallpapers-heading" className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                Phone Wallpapers
              </h2>
              <p className="mt-4 font-body text-lg font-light text-omb-muted-dark">
                For the screen you check a hundred times a day.
              </p>
            </Reveal>

            <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2">
              {/* Wallpaper 01 — Founder */}
              <Reveal className="text-center">
                <PhoneFrame src={wp01} alt="Founder wallpaper — OMB logo" />
                <p className="eyebrow mt-8 text-omb-muted-dark">Wallpaper 01 — Founder</p>
                <p className="mx-auto mt-3 max-w-xs font-body text-base font-light text-omb-muted-dark">
                  The one on my phone right now.
                </p>
                <div className="mt-6">
                  <DownloadButton href="/downloads/wallpaper-01-founder.png" name="omb-wallpaper-founder.png" />
                </div>
              </Reveal>

              {/* Wallpaper 02 — Community */}
              <Reveal delay={100} className="text-center">
                <PhoneFrame src={wp02} alt="Community wallpaper — full mantra" />
                <p className="eyebrow mt-8 text-omb-muted-dark">Wallpaper 02 — Community</p>
                <p className="mx-auto mt-3 max-w-xs font-body text-base font-light text-omb-muted-dark">
                  The whole mantra, where you&apos;ll see it at 3 a.m.
                </p>
                <div className="mt-6">
                  <DownloadButton href="/downloads/wallpaper-02-community.png" name="omb-wallpaper-community.png" />
                </div>
              </Reveal>
            </div>

            <div className="mx-auto mt-20 max-w-2xl">
              <Collapsible title="How to set your wallpaper">
                <p className="font-medium text-omb-white">iPhone</p>
                <p className="mt-2">
                  Save the image to Photos. Open Settings → Wallpaper → choose the
                  image and set it as your lock screen.
                </p>
                <p className="mt-6 font-medium text-omb-white">Android</p>
                <p className="mt-2">
                  Save the image. Long-press the home screen → Wallpapers → pick it
                  from Photos and apply.
                </p>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Watch Faces */}
        <section className="border-t border-omb-line-dark px-6 py-28" aria-labelledby="watch-heading">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 id="watch-heading" className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                Watch Faces
              </h2>
              <p className="mt-4 font-body text-lg font-light text-omb-muted-dark">
                For the reminder right there on your wrist — where you check your pulse.
              </p>
            </Reveal>

            <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2">
              <Reveal className="text-center">
                <WatchFrame src={watchMin} alt="Minimal watch face" />
                <p className="eyebrow mt-8 text-omb-muted-dark">Watch Face — Minimal</p>
                <p className="mx-auto mt-3 max-w-xs font-body text-base font-light text-omb-muted-dark">
                  Clean. Every time you look down.
                </p>
                <div className="mt-6">
                  <DownloadButton href="/downloads/watch-minimal.png" name="omb-watch-minimal.png" />
                </div>
              </Reveal>

              <Reveal delay={100} className="text-center">
                <WatchFrame src={watchBadge} alt="Badge watch face" />
                <p className="eyebrow mt-8 text-omb-muted-dark">Watch Face — Badge</p>
                <p className="mx-auto mt-3 max-w-xs font-body text-base font-light text-omb-muted-dark">
                  The circular mark, full movement.
                </p>
                <div className="mt-6">
                  <DownloadButton href="/downloads/watch-badge.png" name="omb-watch-badge.png" />
                </div>
              </Reveal>
            </div>

            <div className="mx-auto mt-20 max-w-2xl">
              <Collapsible title="How to set your watch face">
                <p className="font-medium text-omb-white">Apple Watch</p>
                <p className="mt-2">
                  Save the image to Photos. Open the Watch app → Face Gallery →
                  add a Photos face → select this image.
                </p>
                <p className="mt-6 font-medium text-omb-white">Wear OS</p>
                <p className="mt-2">
                  Save the image. Open the Watch app → Watch faces → Photos →
                  choose this image and apply.
                </p>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="border-t border-omb-line-dark px-6 py-32 text-center">
          <Reveal>
            <p className="font-body text-xl font-light text-omb-muted-dark sm:text-2xl">
              Whenever it gets loud, look down.
            </p>
            <p className="mt-10 font-mono text-[clamp(1.2rem,4.4vw,2rem)] font-medium uppercase leading-[1.5] tracking-[0.06em]">
              One More Beat.
              <br />
              One More Breath.
              <br />
              One More Day.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
