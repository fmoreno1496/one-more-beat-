// ⚠️ PLACEHOLDER — replace with your real Facebook Group URL once created.
//    This same line also appears in app/components/Community.tsx — update both.
const FACEBOOK_GROUP_URL = "https://www.facebook.com/groups/onemorebeatmovement";
const TIKTOK_URL = "https://www.tiktok.com/@onemorebeatmovement";
const INSTAGRAM_URL = "https://www.instagram.com/onemorebeatmovement";

export default function Footer() {
  return (
    <footer id="connect" className="bg-omb-black px-6 pb-16 pt-24 text-omb-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-2xl font-medium tracking-[0.04em]">
          Find the others.
        </p>
        <p className="mt-4 font-body text-lg font-light italic text-omb-muted-dark">
          You don&apos;t have to do this alone.
        </p>

        {/* Social + nav links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-omb-white transition-opacity hover:opacity-70"
          >
            Facebook Group
          </a>
          <span className="text-omb-line-dark" aria-hidden="true">·</span>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-omb-muted-dark transition-colors hover:text-omb-white"
          >
            TikTok
          </a>
          <span className="text-omb-line-dark" aria-hidden="true">·</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-omb-muted-dark transition-colors hover:text-omb-white"
          >
            Instagram
          </a>
          <span className="text-omb-line-dark" aria-hidden="true">·</span>
          <a
            href="/reminders"
            className="eyebrow text-omb-muted-dark transition-colors hover:text-omb-white"
          >
            Free Reminders
          </a>
        </div>

        <p className="mt-16 font-mono text-sm uppercase leading-[1.9] tracking-[0.28em] text-omb-muted-dark">
          One More Beat
          <br />
          One More Breath
          <br />
          One More Day
        </p>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-omb-line-dark pt-8 sm:flex-row sm:justify-center sm:gap-8">
          <p className="eyebrow text-omb-muted-dark">onemorebeatmovement.com</p>
          <p className="eyebrow text-omb-muted-dark">ombmovement.com</p>
          <p className="eyebrow text-omb-muted-dark">
            © {new Date().getFullYear()} One More Beat
          </p>
        </div>
      </div>
    </footer>
  );
}
