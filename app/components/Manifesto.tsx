import Reveal from "./Reveal";
import Signature from "./Signature";

/**
 * The manifesto is the spine of the site. It reads as one continuous
 * founder letter on black: a narrow serif reading column, with the lines
 * worth hanging on a wall lifted into oversized monospace pull quotes.
 *
 * Structure: an ordered list of blocks. "letter" = serif reading text,
 * "pull" = full-bleed monospace caps moment of emphasis.
 */
type Block =
  | { type: "letter"; lines: string[] }
  | { type: "pull"; text: string };

const BLOCKS: Block[] = [
  {
    type: "letter",
    lines: [
      "For most of my life, I\u2019ve been afraid of my heart.",
      "I was diagnosed with AFib when I was fourteen years old.",
      "What started as a medical condition eventually became something much bigger.",
    ],
  },
  { type: "pull", text: "Fear." },
  {
    type: "letter",
    lines: [
      "For more than thirty years, I\u2019ve lived with skipped beats, flutters, panic attacks, ER visits, heart monitors, tests, procedures, and an endless stream of \u201cwhat if\u201d thoughts.",
      "Some of the hardest moments weren\u2019t caused by my heart.",
    ],
  },
  { type: "pull", text: "They were caused by my fear of it." },
  {
    type: "letter",
    lines: [
      "Fear that every skipped beat meant something was wrong.",
      "Fear that every sensation needed an explanation.",
      "Fear that tomorrow might be different.",
    ],
  },
  {
    type: "letter",
    lines: [
      "People see the successful career.",
      "They see the husband.",
      "They see the father.",
      "They see the life I\u2019ve built.",
      "What they don\u2019t always see is the quiet battle happening underneath.",
      "The anxiety. The uncertainty.",
      "The days when my mind convinces me that a single heartbeat deserves all of my attention.",
    ],
  },
  { type: "pull", text: "The truth is, I haven\u2019t conquered that fear." },
  { type: "pull", text: "I still struggle." },
  {
    type: "letter",
    lines: [
      "Some days are easier than others.",
      "Some days I still need to remind myself of everything I\u2019ve learned over the last three decades.",
      "And that\u2019s exactly why I created One More Beat.",
      "Not because I have all the answers.",
      "Not because I\u2019ve figured it all out.",
      "But because I know what it feels like to believe you\u2019re alone.",
    ],
  },
  { type: "pull", text: "And I know you\u2019re not." },
  { type: "pull", text: "One More Beat isn\u2019t about being fearless." },
  {
    type: "letter",
    lines: [
      "It\u2019s about choosing to keep living even when fear is still in the room.",
      "It\u2019s about trusting yourself enough to take the next step.",
    ],
  },
];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-omb-black px-6 pb-40 pt-32 text-omb-white sm:pb-56 sm:pt-44"
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto max-w-[40rem]">
        <Reveal>
          <p className="eyebrow text-omb-muted-dark">The Manifesto</p>
          <h2
            id="manifesto-heading"
            className="mt-10 font-mono text-[clamp(1.4rem,4vw,2.1rem)] font-medium uppercase leading-tight tracking-[0.12em]"
          >
            Why I Built
            <br />
            One More Beat
          </h2>
          <div className="mt-10 h-px w-16 bg-omb-line-dark" aria-hidden="true" />
        </Reveal>

        <div className="mt-24 space-y-24">
          {BLOCKS.map((block, i) => {
            if (block.type === "pull") {
              return (
                <Reveal key={i}>
                  <p className="font-mono text-[clamp(1.2rem,4.4vw,2rem)] font-medium uppercase leading-[1.3] tracking-[0.06em]">
                    {block.text}
                  </p>
                </Reveal>
              );
            }
            return (
              <Reveal key={i}>
                <div className="space-y-6 font-body text-xl font-light leading-[1.85] text-omb-muted-dark sm:text-[1.4rem]">
                  {block.lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Closing mantra + signature */}
        <Reveal className="mt-32">
          <p className="font-mono text-[clamp(1.2rem,4.4vw,2rem)] font-medium uppercase leading-[1.45] tracking-[0.06em]">
            One More Beat.
            <br />
            One More Breath.
            <br />
            One More Day.
          </p>
          <p className="mt-16 font-body text-xl font-light leading-relaxed text-omb-muted-dark sm:text-[1.4rem]">
            That&apos;s all we&apos;re trying to do.
          </p>
          <p className="mt-10 font-body text-xl font-light leading-relaxed text-omb-muted-dark sm:text-[1.4rem]">
            Keep going.
          </p>

          <div className="mt-28">
            <Signature />
            <p className="eyebrow mt-6 text-omb-muted-dark">Fernando Moreno</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
