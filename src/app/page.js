"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideFrom = (dir) => ({
  hidden: { opacity: 0, x: dir === "left" ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
});

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0 0" }}
      className="fixed left-0 top-0 h-1 w-full bg-[var(--innara-primary)] z-50"
    />
  );
}

export default function Home() {
  const [hoveredStep, setHoveredStep] = useState(null);
  
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-xl font-bold text-[var(--innara-primary)] animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              Mealistik
            </div>
            <nav
              className="hidden md:flex items-center gap-6 text-sm text-slate-700 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <a className="hover:text-[var(--innara-primary)] link-underline" href="#about">
                About
              </a>
              <a
                className="hover:text-[var(--innara-primary)] link-underline"
                href="#features"
              >
                Features
              </a>
              <a
                className="hover:text-[var(--innara-primary)] link-underline"
                href="#plans"
              >
                Plans
              </a>
              <a
                className="hover:text-[var(--innara-primary)] link-underline"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--innara-primary)]/40 animate-fade-up animate-glow"
                style={{
                  backgroundColor: "var(--innara-footer)",
                  animationDelay: "180ms",
                }}
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      </header>

     {/* Hero */}
      <section className="relative overflow-hidden mx-auto w-full max-w-7xl p-[40px] sm:p-[60px] lg:p-[75px] py-8 sm:py-10 bg-gradient-to-l from-[#CCCCFF] to-white">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Text column */}
          <div className="text-center md:text-left max-w-3xl md:max-w-xl mx-auto md:mx-0">
            <p
              className="inline-block text-xs tracking-wide uppercase text-[var(--innara-primary)] bg-[var(--innara-surface)] rounded-full px-3 py-1 mb-5 animate-fade-up border border-[var(--innara-primary)]"
              style={{ animationDelay: "80ms" }}
            >
              New: Hormone-Smart Meal Planning App
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#7A69AF,#9B8BD1,#7A69AF)] bg-[length:200%_100%] animate-[shine_6s_linear_infinite] animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              Meal Prep with your Hormones in mind
            </h1>
            <p
              className="mt-4 text-slate-600 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Mealistik helps you plan, prep, and balance meals that support hormonal
              health, one week at a time. Science-backed nutrition tailored to
              your unique cycle and goals.
            </p>
            <div
              className="mt-8 flex items-center justify-center md:justify-start gap-3 animate-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5 hover:brightness-90"
                style={{ backgroundColor: "#2E1A47", color: "#FFFFFF" }}
              >
                Download the App 
                <span className="ml-2">➜</span>
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--innara-primary)] px-5 py-3 text-sm font-semibold text-[var(--innara-primary)] transition-all duration-200 hover:bg-[#9999CC] hover:text-white hover:border-[#9999CC] active:bg-[#9999CC] active:text-white active:border-[#9999CC]"
              >
                See How It Works
                <span className="ml-2">➜</span>
              </a>
            </div>
          </div>

          {/* Illustration column */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 sm:w-56 md:w-72 lg:w-80 aspect-square"
            >
        <Image
                src="/icons/hippo-scooter.png"
                alt="Hippo on a scooter illustration"
                fill
                className="object-contain drop-shadow-xl"
          priority
                quality={90}
              />
            </motion.div>
          </div>
        </div>
        {/* Wavy bottom border */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-12 sm:h-16 md:h-20"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#CCCCFF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-current text-white"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-current text-white"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        fill="url(#waveGradient)"
      ></path>
    </svg>
  </div>
      </section>

      {/* Stats / Metrics */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white">
  <div className="h-0.5 w-full bg-[var(--innara-primary)]/50 mb-12" />
  <div className="grid sm:grid-cols-3 gap-10 text-center">
    {[
      { title: "Free", subtitle: "7 day trial", icon: "/icons/hippo-gift.png" },
      { title: "24 hr", subtitle: "Set up Support", icon: "/icons/hippo-clock.png" },
      { title: "2x", subtitle: "Energy Increase", icon: "/icons/hippo-speed.png" },
    ].map((item) => (
      <div key={item.title} className="flex flex-col items-center">
        {/* Direct Image without circle */}
        <Image
          src={item.icon}
          alt={item.title}
          width={96}   // bigger size (adjust as needed)
          height={96}
          className="object-contain"
        />
        <div className="mt-6 text-xl sm:text-3xl font-bold text-slate-900">
          {item.title}
        </div>
        <div className="mt-2 text-base text-slate-700">{item.subtitle}</div>
      </div>
    ))}
  </div>
  <div className="h-0.5 w-full bg-[var(--innara-primary)]/50 mt-12" />
</section>

      {/* About */}
      <section
        id="about"
        className="mx-auto w-full max-w-7xl p-[40px] sm:px-[60px] lg:px-[75px] py-16 sm:py-20"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Why Mealistik? Your hormones deserve better
            </h2>
            <p className="mt-4 text-slate-600">
              Hormonal imbalances affect energy, mood, and metabolism. Traditional
              meal planning ignores these crucial signals. Innara aligns nutrition
              with your hormonal patterns.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7A69AF]"></span>
                Personalized to your hormonal cycle
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7A69AF]"></span>
                Science-backed + dietitian-guided
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7A69AF]"></span>
                Easy prep guidance
          </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7A69AF]"></span>
                Track progress & wellness
          </li>
            </ul>
            <div className="mt-6">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-[var(--innara-primary)] px-5 py-3 text-sm font-semibold text-[var(--innara-primary)] transition-colors hover:bg-[var(--innara-surface)]"
              >
                Learn More about Mealistik
                <span className="ml-2">➜</span>
              </a>
            </div>
          </motion.div>
          <div className="flex justify-center">
          <div className="relative w-36 sm:w-40 md:w-44 lg:w-48 aspect-[9/19] rounded-[1.5rem] border-4 border-slate-900/90 bg-slate-100 shadow-lg overflow-hidden">
              <Image
                src="/app-mock.png"
                alt="Innara app screen"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto w-full max-w-7xl p-[40px] sm:px-[60px] lg:px-[75px] py-16 sm:py-20 bg-gradient-to-l from-[#FFFFFF] to-[#CCCCFF]"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Features that support your journey
          </h2>
          <p className="mt-3 text-slate-600">
            Mealistik combines cutting-edge nutrition science with intuitive design
            to give you the tools you need for hormonal health success.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Smart Meal Plans",
              desc: "Meals synced with your hormonal cycle for optimal energy and mood balance.",
              points: ["Cycle-aware recipes", "Grocery lists", "Prep reminders"],
            },
            {
              title: "Cycle Tracking",
              desc: "Understand your body better with personalized cycle logging and insights.",
              points: [
                "Phase-based guidance",
                "Mood + symptom logging",
                "Cycle predictions",
              ],
            },
            {
              title: "Nutrition Insights",
              desc: "Get science-backed tips tailored to your cycle phase.",
              points: [
                "Hormone-supportive foods",
                "Easy swaps & hacks",
                "Data-driven recommendations",
              ],
            },
            {
              title: "Mind-Body Wellness",
              desc: "Support your mental and emotional health alongside nutrition.",
              points: [
                "Guided relaxation",
                "Stress management tools",
                "Phase-specific workouts",
              ],
            },
            {
              title: "Recipe Library",
              desc: "Explore delicious, cycle-friendly recipes crafted by experts.",
              points: [
                "Quick & easy meals",
                "Ingredient-based search",
                "Personalized suggestions",
              ],
            },
            {
              title: "Community Support",
              desc: "Connect with others on the same journey, share and grow together.",
              points: ["Group discussions", "Expert advice", "Safe, supportive space"],
            },
          ].map((f, i) => (
            <div key={i} className="group [perspective:800px] animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-2px)] hover:shadow-md flex flex-col">
                <div className="h-8 w-8 rounded-full bg-[#9999CC]/20 text-[#9999CC] grid place-content-center mb-4">
                  ★
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600 list-disc pl-5 flex-1">
                  {f.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="pt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section
        id="plans"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        {/* Hippo mascot at top center */}
        <div className="flex justify-center mb-8">
        <Image
        src="/icons/hippo-mascot.png" 
        alt="Innara Mascot"
        width={300}   
        height={300}
        className="object-contain"
        />
        </div>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            How Mealistik Works for You
          </h2>
          <p className="mt-2 text-slate-600">
            Getting started is easier than you think. Here&apos;s how Innara guides you every step of the way.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connector line across all steps */}
            <div className="absolute top-7 left-50 right-50 h-[2px] bg-[var(--innara-primary)] z-0" />

            {[
              { n: 1, t: "Tell Innara About You", bullets: ["Share your health details so Mealistik knows your needs.", "Set your personal health and fitness goals", "Tell us what foods and flavors you like"] },
              { n: 2, t: "Get Your Smart Plan", bullets: ["Get a weekly meal plan made just for you.", "See exactly what to shop for, stress-free", "Follow easy tips to cook and prep faster"] },
              { n: 3, t: "Track & Adapt", bullets: ["Track your meals and progress with ease", "Get simple AI assisted insights on what’s working for you", "Tweak your plan anytime to fit your life"] },
            ].map((s) => (
              <div key={s.n} className="flex-1 flex flex-col items-center">
                {/* Circle sits on the line, above it */}
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative z-10 h-30 w-30 rounded-full bg-[#ECECFF] 
                    grid place-content-center text-[#7A69AF] text-xl sm:text-2xl lg:text-3xl font-semibold shadow-sm"
                >
                {s.n}
                </motion.div>

                {/* Card directly under circle */}
                <div className="group [perspective:800px] mt-6 w-full max-w-[220px] rounded-xl border border-slate-200 bg-white shadow-sm 
                                p-4 transform transition-transform duration-300 hover:scale-105 hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-2px)]">
                  <div className="font-semibold text-slate-900 text-center">{s.t}</div>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1 text-left">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {[
            { n: 1, t: "Tell Innara About You", bullets: ["Share your health details so Mealistik knows your needs", "Set your personal health and fitness goals", "Tell us what foods and flavors you like"] },
            { n: 2, t: "Get Your Smart Plan", bullets: ["Get a weekly meal plan made just for you", "See exactly what to shop for, stress-free", "Follow easy tips to cook and prep faster"] },
            { n: 3, t: "Track & Adapt", bullets: ["Track your meals and progress with ease", "Get simple insights on what’s working for you", "Tweak your plan anytime to fit your life"] },
          ].map((s) => (
            <div
              key={s.n}
              className="group [perspective:800px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateY(-2px)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--innara-surface)] text-[var(--innara-primary)] grid place-content-center font-semibold">
                  {s.n}
                </div>
                <div className="font-semibold text-slate-900">{s.t}</div>
              </div>
              <ul className="mt-2 text-sm text-slate-600 space-y-1">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

         
      {/* Community / Contact */}
      <section id="contact" className="mx-auto w-full max-w-7xl p-[40px] sm:px-[60px] lg:px-[75px] py-16 sm:py-20 bg-gradient-to-l from-[#CCCCFF] to-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Join the Mealistik Community</h2>
          <p className="mt-2 text-slate-600">Stay connected with the latest in hormone-friendly nutrition and app updates.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Get Connected</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Early Access", desc: "Be first to try new features", icon: "/icons/gift.png" },
                { title: "Partnership", desc: "Collaborate with Innara", icon: "/icons/handshake.png" },
                { title: "Newsletter", desc: "Monthly insights & recipes", icon: "/icons/newsletter.png" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="h-9 w-9 rounded-lg bg-[var(--innara-surface)] grid place-content-center">
          <Image
                      src={card.icon}
                      alt={card.title}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-2 font-medium text-slate-900">{card.title}</div>
                  <div className="text-sm text-slate-600">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--innara-primary)]/30" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--innara-primary)]/30" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">I&apos;m interested in</label>
              <select className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--innara-primary)]/30">
                <option>Meal Planning</option>
                <option>Nutrition Guides</option>
                <option>Community</option>
              </select>
            </div>
            <div className="pt-2">
              <button className="inline-flex items-center justify-center rounded-2xl bg-[var(--innara-primary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--innara-primary)]/40 w-full md:w-auto">Join Innara Community</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--innara-footer)] text-slate-200">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Footer Columns */}
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="text-xl font-bold text-white">Mealistik</div>
              <p className="mt-3 text-sm text-slate-300">
                Empowering women to thrive through hormone-smart nutrition.
              </p>
            </div>
            <div>
              <div className="font-semibold text-white">App</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Features</li>
                <li>How it Works</li>
                <li>Pricing</li>
                <li>Download</li>
                <li>System Requirements</li>
                <li>Release Notes</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>About</li>
                <li>Our Science</li>
                <li>Healthcare Partners</li>
                <li>Careers</li>
                <li>Press Kit</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Blog</li>
                <li>Nutrition Guides</li>
                <li>Support Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-10 flex items-center justify-between flex-col sm:flex-row gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Innara. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: "Instagram", icon: "/icons/instagram.png", link: "https://www.instagram.com/innara.ai/" },
                { name: "Medium", icon: "/icons/medium.png", link: "https://medium.com/@innara.general" },
                { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://www.linkedin.com/company/innara-ai/" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
          target="_blank"
          rel="noopener noreferrer"
                  className="h-8 w-8 grid place-content-center rounded-full bg-[#1B0F2B] hover:bg-[#2C1B45] transition-colors"
        >
          <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
