import Image, { type StaticImageData } from "next/image";

/**
 * A phone frame that displays a wallpaper with a realistic lock-screen
 * overlay (date + clock), so the wallpaper reads as if it's live on a phone.
 */
export default function PhoneFrame({
  src,
  alt,
  showClock = true,
}: {
  src: StaticImageData | string;
  alt: string;
  showClock?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[16rem]">
      <div className="relative overflow-hidden rounded-[2.6rem] border border-omb-line-dark bg-black p-2 shadow-2xl">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="256px"
            className="object-cover"
          />
          {showClock && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center pt-10 text-omb-white">
              <span className="font-mono text-[0.62rem] tracking-wide opacity-90">
                Tue Jun 23
              </span>
              <span className="mt-1 font-display text-6xl font-light leading-none opacity-95">
                8:48
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
