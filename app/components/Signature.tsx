import fs from "fs";
import path from "path";
import Image from "next/image";

/**
 * Founder signature for the close of the manifesto.
 *
 * Uses the real signature at `public/signature.png` (white ink on a
 * transparent background) when present; otherwise falls back to a
 * handwritten script face spelling "Fernando Moreno". Detection runs at
 * build time, so swapping the file and redeploying is all that's needed.
 */
function hasSignatureImage(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "signature.png"));
  } catch {
    return false;
  }
}

export default function Signature({
  className = "",
  colorClass = "text-omb-white",
}: {
  className?: string;
  colorClass?: string;
}) {
  if (hasSignatureImage()) {
    return (
      <Image
        src="/signature.png"
        alt="Fernando Moreno, signature"
        width={3019}
        height={836}
        sizes="(max-width: 640px) 19rem, 24rem"
        className={`h-auto w-[19rem] sm:w-[24rem] ${className}`}
        priority={false}
      />
    );
  }

  return (
    <span
      className={`font-signature inline-block leading-none ${colorClass} ${className}`}
      aria-label="Fernando Moreno, signature"
    >
      Fernando Moreno
    </span>
  );
}
