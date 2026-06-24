"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/omb-logo.png";

/**
 * Minimal floating top nav. Transparent over black, no bar fill — it sits
 * lightly over the hero and stays out of the manifesto's way. Provides the
 * way home from /reminders and quiet wayfinding between sections.
 */
export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On the home page, links jump to sections; from /reminders they route home first.
  const link = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" aria-label="One More Beat — home" className="shrink-0">
          <Image src={logo} alt="One More Beat" priority className="h-9 w-auto" />
        </Link>

        <div className="flex items-center gap-6 sm:gap-9">
          <a href={link("#manifesto")} className="eyebrow hidden text-omb-muted-dark transition-colors hover:text-omb-white sm:inline">
            Why
          </a>
          <a href={link("#community")} className="eyebrow hidden text-omb-muted-dark transition-colors hover:text-omb-white sm:inline">
            Community
          </a>
          <Link href="/reminders" className="eyebrow text-omb-muted-dark transition-colors hover:text-omb-white">
            Reminders
          </Link>
          <a href={link("#connect")} className="eyebrow hidden text-omb-muted-dark transition-colors hover:text-omb-white sm:inline">
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
