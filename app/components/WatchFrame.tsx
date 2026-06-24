import Image, { type StaticImageData } from "next/image";

/**
 * A watch frame (rounded square with lugs + crown) displaying a watch face.
 */
export default function WatchFrame({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[11rem]">
      <div className="relative mx-auto aspect-[5/6] w-full">
        {/* lugs */}
        <div className="absolute left-1/2 top-0 h-5 w-16 -translate-x-1/2 rounded-t-lg bg-omb-line-dark" />
        <div className="absolute bottom-0 left-1/2 h-5 w-16 -translate-x-1/2 rounded-b-lg bg-omb-line-dark" />
        {/* crown */}
        <div className="absolute right-0 top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-r bg-omb-line-dark" />
        {/* body */}
        <div className="relative flex h-full items-center justify-center rounded-[2rem] border border-omb-line-dark bg-black p-2.5 shadow-2xl">
          <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem]">
            <Image src={src} alt={alt} fill sizes="176px" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
