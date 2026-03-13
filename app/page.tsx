"use client";

import { useState } from "react";
import { Apple, Star, X, Sparkles, Moon, Heart } from "lucide-react";

// ─── Waitlist Modal ────────────────────────────────────────────────────────────

function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(2,6,23,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-yellow-500/20 bg-slate-900 p-8 shadow-2xl"
        style={{ boxShadow: "0 0 60px rgba(212,175,55,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition-colors hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="mb-4 text-center text-3xl">𓂀</div>

        {!submitted ? (
          <>
            <h2
              className="mb-2 text-center text-xl font-bold text-yellow-500"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Overwhelmed by demand!
            </h2>
            <p className="mb-6 text-center text-sm leading-relaxed text-slate-300">
              The app is currently in closed beta. Drop your email to get{" "}
              <span className="font-semibold text-yellow-400">priority access</span>{" "}
              and{" "}
              <span className="font-semibold text-yellow-400">1 month free</span>{" "}
              at public launch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/30"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-yellow-500 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-yellow-400 active:scale-95 disabled:opacity-70"
              >
                {loading ? "Joining..." : "Join the waitlist"}
              </button>
            </form>
            <p className="mt-3 text-center text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="mb-3 text-4xl">✨</div>
            <h2
              className="mb-2 text-xl font-bold text-yellow-500"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The scribes have noted your name.
            </h2>
            <p className="text-sm text-slate-300">
              You are on the list. Thoth will reach out at launch.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      icon: <Moon size={24} className="text-yellow-500" />,
      img: "/feature1.png",
      title: "Your Protective God",
      description:
        "Discover the Egyptian deity watching over you since birth, according to the Cairo Papyrus — a 3,200-year-old manuscript.",
    },
    {
      icon: <Sparkles size={24} className="text-yellow-500" />,
      img: "/feature2.png",
      title: "Ancestral Predictions",
      description:
        "Every day, receive your daily oracle — favorable, unfavorable, or mixed — exactly as Egyptian priests once consulted it.",
    },
    {
      icon: <Heart size={24} className="text-yellow-500" />,
      img: "/feature3.png",
      title: "Karmic Compatibility",
      description:
        "Explore the affinities between Egyptian deities and understand your relationships through a millennia-old lens.",
    },
  ];

  return (
    <>
      {modalOpen && <WaitlistModal onClose={() => setModalOpen(false)} />}

      <main className="min-h-screen overflow-x-hidden pb-24">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,175,55,0.08) 0%, transparent 70%)",
            }}
          />

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            <span>𓇳</span> Cairo Papyrus · 1200 BC
          </div>

          {/* Headline */}
          <h1
            className="gold-shimmer mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Modern astrology
            <br />
            is lying to you.
          </h1>
          <h2
            className="mb-6 text-2xl font-medium text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Discover your true destiny.
          </h2>

          <p className="mb-10 max-w-md text-base leading-relaxed text-slate-300">
            The first horoscope based on the genuine papyri of Ancient Egypt.
            Not recycled zodiac signs — original wisdom.
          </p>

          {/* Hero mockup */}
          <div className="relative mb-10 w-full max-w-xs">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/hero-mockup.png"
              alt="Egyptian Oracle app mockup"
              className="relative mx-auto w-full max-w-[280px] drop-shadow-2xl"
            />
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-3 rounded-2xl bg-yellow-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg transition-all hover:bg-yellow-400 active:scale-95"
            style={{ boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
          >
            <Apple size={22} />
            Download on the App Store
          </button>

          {/* Stars */}
          <div className="mt-6 flex flex-col items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Join over{" "}
              <span className="font-semibold text-white">10,000 initiates</span>
            </p>
          </div>
        </section>

        {/* ── SOCIAL PROOF ─────────────────────────────────── */}
        <section className="border-y border-slate-800 bg-slate-900/50 px-6 py-12 text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-yellow-500/70">
            They consulted the oracle
          </p>
          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-3">
            {[
              { quote: "More accurate than my astrologer.", author: "Lea, 28" },
              { quote: "I check it every morning. Three months straight.", author: "Marcus, 34" },
              { quote: "The compatibility feature blew my mind.", author: "Sofia, 25" },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-700/50 bg-slate-900 p-5"
              >
                <div className="mb-2 flex justify-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-3 text-sm leading-relaxed text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs text-slate-500">{t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-lg">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-yellow-500/70">
              What awaits you
            </p>
            <h2
              className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Ancient wisdom,{" "}
              <span className="text-yellow-500">in your pocket</span>
            </h2>

            <div className="space-y-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"
                >
                  {/* Feature image placeholder */}
                  <div className="relative flex h-52 items-center justify-center bg-slate-800/60">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute flex flex-col items-center gap-2 text-slate-600">
                      {f.icon}
                      <span className="text-xs">image placeholder</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-3">
                      {f.icon}
                      <h3
                        className="text-lg font-bold text-yellow-400"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="px-6 py-20 text-center">
          <div
            className="mx-auto max-w-md rounded-2xl border border-yellow-500/20 p-10"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(212,175,55,0.08), transparent 70%), #0f172a",
            }}
          >
            <div className="mb-4 text-4xl">𓂀</div>
            <h2
              className="mb-3 text-2xl font-bold text-yellow-500"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The oracle awaits
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-300">
              Every passing day is a message from the scribes left unread.
              Begin today.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-500 py-4 text-base font-bold text-slate-950 transition-all hover:bg-yellow-400 active:scale-95"
              style={{ boxShadow: "0 0 30px rgba(212,175,55,0.25)" }}
            >
              <Apple size={22} />
              Download on the App Store
            </button>
            <p className="mt-3 text-xs text-slate-500">
              iOS · Free with premium access
            </p>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="border-t border-slate-800 px-6 py-8 text-center">
          <p className="text-xs text-slate-600">
            © 2026 Egyptian Oracle · All rights reserved ·{" "}
            <a href="/privacy" className="underline hover:text-slate-400">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="/terms" className="underline hover:text-slate-400">
              Terms
            </a>
          </p>
        </footer>
      </main>

      {/* ── STICKY CTA ───────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800 bg-slate-950/95 px-4 py-3"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="mx-auto flex w-full max-w-lg items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-yellow-400 active:scale-95"
        >
          <Apple size={18} />
          Download for free
        </button>
      </div>
    </>
  );
}
