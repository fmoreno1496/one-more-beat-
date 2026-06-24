import Image from "next/image";
import logo from "../../public/omb-logo.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center bg-omb-black px-6 text-omb-white">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <Image
          src={logo}
          alt="One More Beat Movement"
          priority
          className="fade-up h-auto w-32 sm:w-40"
          style={{ animationDelay: "0.1s" }}
        />

        <h1
          className="fade-up mt-16 font-mono text-[clamp(1.5rem,4.5vw,2.4rem)] font-medium uppercase leading-[1.25] tracking-[0.28em]"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block">One More Beat</span>
          <span className="block">One More Breath</span>
          <span className="block">One More Day</span>
        </h1>

        <p
          className="fade-up mt-14 font-body text-lg font-light italic text-omb-muted-dark sm:text-xl"
          style={{ animationDelay: "0.5s" }}
        >
          A movement for people who keep going.
        </p>

        <div
          className="fade-up mt-16 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#manifesto"
            className="eyebrow border-b border-omb-line-dark pb-2 text-omb-white transition-colors duration-300 hover:border-omb-white"
          >
            Read the manifesto
          </a>
          <a
            href="#join"
            className="eyebrow border-b border-omb-line-dark pb-2 text-omb-white transition-colors duration-300 hover:border-omb-white"
          >
            Join the movement
          </a>
        </div>
      </div>
    </section>
  );
}
