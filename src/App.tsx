import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Code2, Cpu, Wrench, Briefcase, FolderGit2, MoveRight } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiVite, SiGit, SiFramer, SiGithub, SiLinkedin, SiX, SiPostman, SiDiscord } from "react-icons/si";
import SectionCard from "./components/SectionCard";
import { Link, useLocation } from "react-router-dom";
import Socials from "./components/SocialComponents";


const PROFILE = {
  name: "Akash Singh",
  role: "Full‑Stack Developer (AIML)",
  tagline: "I build clean, fast and accessible web apps with a minimalist design philosophy.",
  location: "India (Remote)",
};

const SOCIALS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: <SiLinkedin className="size-5 flex-shrink-0" />, brand: "#0A66C2" },
  { name: "GitHub", href: "https://github.com/your-handle", icon: <SiGithub className="size-5 flex-shrink-0" />, brand: "#24292F" },
  { name: "Twitter", href: "https://x.com/your-handle", icon: <SiX className="size-5 flex-shrink-0" />, brand: "#000000" },
  { name: "Discord", href: "https://discord.com/users/your-handle", icon: <SiDiscord className="size-5 flex-shrink-0" />, brand: "#5865F2" },
];

const TECH = [
  { name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, url: "https://tailwindcss.com" },
  { name: "React", icon: <SiReact />, url: "https://react.dev" },
  { name: "Vite", icon: <SiVite />, url: "https://vitejs.dev/" },
  { name: "Framer Motion", icon: <SiFramer />, url: "https://www.framer.com/motion/" },
  { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com" },
  { name: "Express", icon: <SiExpress />, url: "https://expressjs.com" },
  { name: "Node.js", icon: <SiNodedotjs />, url: "https://nodejs.org" },
  { name: "Postman", icon: <SiPostman />, url: "https://www.postman.com/" },
  { name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/" },
  { name: "Git", icon: <SiGit />, url: "https://git-scm.com" },
  { name: "Next.js", icon: <SiNextdotjs />, url: "https://nextjs.org/" },
];

const PROJECTS = [
  { title: "F1 Streetwear — Minimal e‑commerce", desc: "A dark, neon‑accent storefront built in React + Tailwind with cart, auth and Google Sheets CMS.", stack: ["React", "Tailwind", "Vite"], link: "https://example.com", repo: "https://github.com/your-handle/f1-store" },
  { title: "Query Autocomplete", desc: "Top‑k prefix autocomplete engine using trie + frequency scoring, debounced UX and tests.", stack: ["TypeScript", "Node", "Vitest"], link: "https://example.com", repo: "https://github.com/your-handle/autocomplete" },
  { title: "3D Portfolio", desc: "Three.js powered portfolio with GSAP micro‑interactions and accessible keyboard nav.", stack: ["React", "Three.js", "GSAP"], link: "https://example.com", repo: "https://github.com/your-handle/3d-portfolio" },
];

const EXPERIENCE = [
  { company: "Freelance", role: "Full‑Stack Developer", period: "2023 — Present", bullets: ["Built React dashboards, marketing sites and internal tools (A11y  AAA where possible).", "Delivered Node/Express APIs with caching, logging and CI/CD on Vercel/Render.", "Consulted on performance (LCP/CLS), DX, and component architecture."] },
  { company: "University Projects", role: "AIML + Web Dev", period: "2022 — 2024", bullets: ["Researched image processing fundamentals and applied classical CV to demos.", "Built ML‑assisted UI prototypes, integrated with web tooling."] },
];

const fade = { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6, ease: "easeOut" } };

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const header = document.getElementById("site-header");
        const top = element.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0) - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default function Portfolio() {
  return (
    <div className="min-h-screen text-neutral-950 bg-gradient-to-br from-neutral-50 via-neutral-50 to-slate-100">
      <ScrollToAnchor />
      {/* Top Nav */}
      <header id="site-header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-neutral-200">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link to="#hero" className="font-bold tracking-tight text-neutral-950 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-neutral-50">AS</span>
            <span>Portfolio</span>
          </Link>
          <div className="hidden sm:flex items-center gap-3">
            <Link to="#about" className="px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">About</Link>
            <Link to="#projects" className="px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">Projects</Link>
            <Link to="#experience" className="px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">Experience</Link>
            <Link to="#contact" className="px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Page Grid Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Hero/Profile */}
        <motion.div {...fade} className="md:col-span-7 lg:col-span-8">
          <SectionCard id="hero" title="Profile" icon={<Code2 className="size-5" />}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
                <p className="text-base md:text-lg text-neutral-700">{PROFILE.role}</p>
                <p className="text-sm md:text-base text-neutral-600 max-w-prose">{PROFILE.tagline}</p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-300">
                    <Cpu className="size-4" /> {PROFILE.location}
                  </span>
                  <Link to="#projects" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">
                    View Projects <MoveRight className="size-4" />
                  </Link>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-56">
                <div className="aspect-square rounded-2xl border border-neutral-300 bg-gradient-to-br from-neutral-200 to-neutral-300 grid place-items-center text-5xl font-semibold select-none">AS</div>
              </div>
            </div>
          </SectionCard>
        </motion.div>

        {/* Social Mini */}
        <motion.div {...fade} className="md:col-span-5 lg:col-span-4">
          <Socials socials={SOCIALS} />
        </motion.div>

        {/* About */}
        <motion.div {...fade} className="md:col-span-12">
          <SectionCard id="about" title="About" icon={<Wrench className="size-5" />}>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-neutral-700 leading-relaxed">
                I’m a developer focused on building pragmatic, scalable interfaces. I love
                modular grid systems, clear hierarchy, and small touches of motion that guide
                attention without distracting. My tool‑belt is React, TypeScript and Tailwind;
                I’m comfortable across the stack with Node/Express and databases.
              </p>
              <ul className="text-neutral-700 space-y-2">
                <li>• Accessible, semantic HTML with keyboard‑first UX.</li>
                <li>• Component‑driven architecture and documentation.</li>
                <li>• Performance budgets, code‑splitting, and profiling.</li>
                <li>• CI/CD, tests, and maintainable DX.</li>
              </ul>
            </div>
          </SectionCard>
        </motion.div>

        {/* Tech Stack Mini */}
        <motion.div {...fade} className="md:col-span-12">
          <SectionCard id="stack" title="Tech Stack" icon={<FolderGit2 className="size-5" />}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TECH.map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 p-3 rounded-xl border border-neutral-300 hover:bg-neutral-200/60 transition-colors">
                  <span className="text-neutral-700">{t.name}</span>
                  <span className="text-2xl group-hover:scale-110 transition-transform">{t.icon}</span>
                </a>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Projects */}
        <motion.div {...fade} className="md:col-span-12">
          <SectionCard id="projects" title="Projects" icon={<FolderGit2 className="size-5" />}>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {PROJECTS.map((p) => (
                <article key={p.title} className="rounded-2xl border border-neutral-300 p-4 bg-white/60 flex flex-col">
                  <h3 className="font-semibold text-neutral-950">{p.title}</h3>
                  <p className="text-sm text-neutral-700 mt-2 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded-lg border border-neutral-300 bg-neutral-100">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">Live <ArrowUpRight className="size-4" /></a>
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">Repo <ArrowUpRight className="size-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Experience */}
        <motion.div {...fade} className="md:col-span-12">
          <SectionCard id="experience" title="Experience" icon={<Briefcase className="size-5" />}>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {EXPERIENCE.map((e) => (
                <div key={e.company} className="rounded-2xl border border-neutral-300 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{e.company}</h3>
                    <span className="text-sm text-neutral-600">{e.period}</span>
                  </div>
                  <p className="text-neutral-700 mt-1">{e.role}</p>
                  <ul className="text-neutral-700 mt-2 space-y-2">
                    {e.bullets.map((b, i) => (<li key={i}>• {b}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Footer / Contact */}
        <motion.div {...fade} className="md:col-span-12">
          <SectionCard id="contact" title="Contact" icon={<Mail className="size-5" />}>
            <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); const name = fd.get("name"); const email = fd.get("email"); const message = fd.get("message"); const mailto = `mailto:you@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(String(name))}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`; window.location.href = mailto; }} className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-neutral-700">Name</label>
                <input id="name" name="name" required placeholder="Your name" className="px-3 py-2 rounded-xl border border-neutral-300 bg-white/70 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-neutral-700">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@email.com" className="px-3 py-2 rounded-xl border border-neutral-300 bg-white/70 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm text-neutral-700">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project…" className="px-3 py-2 rounded-xl border border-neutral-300 bg-white/70 outline-none focus:ring-2 focus:ring-neutral-300" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <p className="text-sm text-neutral-600">Or email directly: <a className="text-blue-600 hover:underline" href="mailto:you@example.com">you@example.com</a></p>
                <button type="submit" className="px-4 py-2 rounded-xl border border-neutral-300 bg-neutral-950 text-neutral-50 hover:opacity-90">Send <ArrowUpRight className="inline-block size-4 ml-1" /></button>
              </div>
            </form>
            <div className="mt-6 pt-6 border-t border-neutral-200 text-xs text-neutral-500">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          </SectionCard>
        </motion.div>
      </main>
    </div>
  );
}
