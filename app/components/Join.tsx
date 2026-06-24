"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Join() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    if (!firstName.trim() || !email.trim()) {
      setStatus("error");
      setMessage("Add your first name and email to continue.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setMessage("You're in. Keep going.");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="join"
      className="bg-omb-black px-6 py-28 text-omb-white sm:py-40"
      aria-labelledby="join-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow text-omb-muted-dark">Join the Movement</p>
          <h2
            id="join-heading"
            className="mt-8 font-mono text-[clamp(1.5rem,5vw,2.4rem)] font-medium uppercase leading-tight tracking-[0.1em]"
          >
            Keep going,
            <br />
            with us.
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          {status === "success" ? (
            <p
              role="status"
              className="font-display text-2xl font-light italic"
            >
              {message}
            </p>
          ) : (
            <div className="mx-auto flex max-w-md flex-col gap-5 text-left">
              <div>
                <label htmlFor="firstName" className="eyebrow text-omb-muted-dark">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-3 w-full border-b border-omb-line-dark bg-transparent pb-3 font-body text-lg font-light text-omb-white placeholder:text-omb-muted-dark focus:border-omb-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="eyebrow text-omb-muted-dark">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-3 w-full border-b border-omb-line-dark bg-transparent pb-3 font-body text-lg font-light text-omb-white placeholder:text-omb-muted-dark focus:border-omb-white focus:outline-none"
                  placeholder="you@email.com"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="eyebrow mt-6 bg-omb-white px-8 py-4 text-omb-black transition-opacity duration-300 hover:opacity-80 disabled:opacity-50"
              >
                {status === "loading" ? "One moment…" : "Keep going"}
              </button>

              {status === "error" && (
                <p role="alert" className="font-body text-sm font-light text-omb-muted-dark">
                  {message}
                </p>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
