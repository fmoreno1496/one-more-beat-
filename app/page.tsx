import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import WhoThisIsFor from "./components/WhoThisIsFor";
import Community from "./components/Community";
import RemindersTeaser from "./components/RemindersTeaser";
import Join from "./components/Join";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One More Beat Movement",
  alternateName: "OMB",
  url: "https://onemorebeatmovement.com",
  slogan: "A movement for people who keep going.",
  founder: { "@type": "Person", name: "Fernando Moreno" },
  description:
    "One More Beat is a movement for people who keep going. One more beat. One more breath. One more day.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <WhoThisIsFor />
        <Community />
        <RemindersTeaser />
        <Join />
      </main>
      <Footer />
    </>
  );
}
