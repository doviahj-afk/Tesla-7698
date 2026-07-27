import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { StoryNav } from "../components/story/nav";
import {
  CountUp,
  ParallaxImage,
  Reveal,
  RevealGroup,
  RevealItem,
} from "../components/story/primitives";

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-screen w-full overflow-hidden">
      <motion.img
        src="/images/cybertruck.jpg"
        alt="Tesla Cybertruck"
        style={{ scale: imgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="ts-eyebrow ts-accent mb-6"
        >
          The Story of an Electric Empire
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="ts-track-tight max-w-5xl text-[clamp(2.8rem,9vw,7.5rem)] font-extrabold leading-[0.98]"
        >
          From Roadster<br />to Robotaxi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="ts-muted mt-8 max-w-xl text-lg md:text-xl"
        >
          How two engineers, one relentless CEO, and a bet on batteries
          rewired the automobile — and where it goes next.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
        >
          <div className="h-2 w-[3px] rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- Centered text block ---------------- */
function TextSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-32 md:py-44">
      <Reveal>
        <p className="ts-eyebrow ts-accent mb-6">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="ts-track-tight text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="ts-muted mt-8 space-y-6 text-lg leading-relaxed md:text-xl">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Full-bleed image story ---------------- */
function ImageStory({
  id,
  src,
  alt,
  eyebrow,
  title,
  text,
  align = "left",
}: {
  id?: string;
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "right";
}) {
  return (
    <section id={id} className="relative h-[100svh] w-full overflow-hidden">
      <ParallaxImage src={src} alt={alt} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div
        className={`relative z-10 flex h-full max-w-6xl flex-col justify-end px-6 pb-24 md:pb-32 ${
          align === "right" ? "mx-auto items-end text-right" : "mr-auto items-start text-left"
        }`}
      >
        <div className={align === "right" ? "max-w-xl" : "max-w-xl"}>
          <Reveal>
            <p className="ts-eyebrow ts-accent mb-4">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="ts-track-tight text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">
              {text}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
const MILESTONES = [
  {
    year: "2003",
    title: "The founding",
    text: "Martin Eberhard and Marc Tarpenning incorporate Tesla Motors in San Carlos, California, on July 1 — named after inventor Nikola Tesla.",
  },
  {
    year: "2004",
    title: "Musk leads the Series A",
    text: "Elon Musk invests $6.5M, becomes chairman and the largest shareholder. JB Straubel joins as CTO to lead battery and powertrain engineering.",
  },
  {
    year: "2008",
    title: "The Roadster arrives",
    text: "Tesla ships its first car — a lithium-ion sports car with a ~245-mile range that proved electric could mean fast, not slow.",
  },
  {
    year: "2010",
    title: "Wall Street IPO",
    text: "Tesla goes public on the NASDAQ — the first American carmaker to IPO since Ford in 1956 — raising about $226 million.",
  },
  {
    year: "2012",
    title: "Model S redefines the sedan",
    text: "The Model S launches with over-the-air updates and a minimalist touchscreen, later earning near-perfect safety and review scores.",
  },
  {
    year: "2017",
    title: "Model 3 goes mass market",
    text: "The $35k-target Model 3 begins production, aiming to bring Tesla to the millions and becoming the world's best-selling EV.",
  },
  {
    year: "2023",
    title: "Cybertruck ships",
    text: "After years of anticipation, the stainless-steel Cybertruck reaches its first customers — Tesla's most radical design yet.",
  },
  {
    year: "2025+",
    title: "The autonomy era",
    text: "Tesla pivots toward Robotaxi (Cybercab) and the Optimus humanoid robot, betting its future on AI and real-world autonomy.",
  },
];

function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-5xl px-6 py-32 md:py-44">
      <Reveal>
        <p className="ts-eyebrow ts-accent mb-6 text-center">The Road So Far</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="ts-track-tight mb-20 text-center text-[clamp(2rem,5vw,3.75rem)] font-bold">
          Two decades in eight moments
        </h2>
      </Reveal>

      <div className="relative">
        {/* center line */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-14 md:space-y-24">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} y={50}>
              <div
                className={`relative flex flex-col pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-14 md:text-right"
                    : "md:ml-auto md:pl-14 md:text-left"
                }`}
              >
                {/* dot */}
                <span
                  className={`absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#e31937] ring-4 ring-[#e31937]/20 ${
                    i % 2 === 0 ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  }`}
                />
                <span className="ts-track-tight text-4xl font-extrabold text-white/90 md:text-5xl">
                  {m.year}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">{m.title}</h3>
                <p className="ts-muted mt-3 text-base leading-relaxed md:text-lg">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stat band ---------------- */
function StatBand() {
  const stats = [
    { value: <><CountUp to={1.79} decimals={2} suffix="M" /></>, label: "Vehicles delivered in 2024" },
    { value: <><CountUp to={7} suffix="+" /></>, label: "Gigafactories worldwide" },
    { value: <>$<CountUp to={97.7} decimals={1} suffix="B" /></>, label: "2024 annual revenue" },
    { value: <><CountUp to={125} suffix="k+" /></>, label: "Employees globally" },
  ];
  return (
    <section className="border-y border-white/10 bg-[#0a0a0a] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="ts-eyebrow ts-muted mb-14 text-center">Tesla by the numbers</p>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <RevealItem key={i} className="text-center">
              <div className="ts-track-tight text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-none">
                {s.value}
              </div>
              <p className="ts-muted mx-auto mt-4 max-w-[14ch] text-sm md:text-base">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.2}>
          <p className="ts-muted mx-auto mt-14 max-w-2xl text-center text-xs">
            Figures are approximate and reflect publicly reported 2024 results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Future / closing ---------------- */
function Future() {
  return (
    <section id="future" className="relative h-[100svh] w-full overflow-hidden">
      <ParallaxImage src="/images/optimus.jpg" alt="Tesla Optimus humanoid robot" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="ts-eyebrow ts-accent mb-6">What Comes Next</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="ts-track-tight text-[clamp(2.2rem,7vw,5rem)] font-extrabold leading-[1.02]">
            No longer just a carmaker
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 text-lg leading-relaxed text-white/75 md:text-xl">
            Today Tesla frames itself as an AI and robotics company that happens
            to build cars. Its next chapter rides on full self-driving, the
            Cybercab robotaxi, the Optimus humanoid robot, and the energy
            business quietly scaling behind it. Whether that vision arrives on
            schedule or not, the company that started with one Roadster has
            already changed what the world expects a car — and a car company — to be.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const link = "underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-[#e31937]";
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-[0.95rem] font-bold tracking-[0.4em]">T E S L A</p>
        <p className="ts-muted mt-4 max-w-2xl text-sm leading-relaxed">
          An independent, editorial retrospective. Not affiliated with or
          endorsed by Tesla, Inc.
        </p>

        <div className="mt-10 grid gap-8 text-sm md:grid-cols-2">
          <div>
            <p className="ts-eyebrow ts-muted mb-3">Sources</p>
            <ul className="ts-muted space-y-2">
              <li><a className={link} href="https://en.wikipedia.org/wiki/Tesla,_Inc." target="_blank" rel="noreferrer">Tesla, Inc. — Wikipedia</a></li>
              <li><a className={link} href="https://www.britannica.com/money/Tesla-Motors" target="_blank" rel="noreferrer">Tesla Motors — Britannica</a></li>
              <li><a className={link} href="https://www.tesla.com/about" target="_blank" rel="noreferrer">About Tesla — tesla.com</a></li>
              <li><a className={link} href="https://www.tesla.com/robotaxi" target="_blank" rel="noreferrer">Tesla Robotaxi — tesla.com</a></li>
              <li><a className={link} href="https://www.tesla.com/AI" target="_blank" rel="noreferrer">Tesla AI &amp; Robotics — tesla.com</a></li>
            </ul>
          </div>
          <div>
            <p className="ts-eyebrow ts-muted mb-3">Image credits</p>
            <ul className="ts-muted space-y-2">
              <li><a className={link} href="https://commons.wikimedia.org/wiki/Category:Tesla_Roadster" target="_blank" rel="noreferrer">Roadster — Wikimedia Commons</a></li>
              <li><a className={link} href="https://commons.wikimedia.org/wiki/Category:Tesla_Model_3" target="_blank" rel="noreferrer">Model 3 — Wikimedia Commons</a></li>
              <li><a className={link} href="https://commons.wikimedia.org/wiki/Category:Tesla_Cybertruck" target="_blank" rel="noreferrer">Cybertruck — Wikimedia Commons</a></li>
              <li><a className={link} href="https://commons.wikimedia.org/wiki/Category:Tesla_Gigafactory_1" target="_blank" rel="noreferrer">Gigafactory — Wikimedia Commons</a></li>
              <li><a className={link} href="https://commons.wikimedia.org/wiki/Category:Optimus_(robot)" target="_blank" rel="noreferrer">Optimus — Wikimedia Commons</a></li>
            </ul>
          </div>
        </div>

        <p className="ts-muted mt-12 text-xs">
          Built as a scroll-story tribute · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
export default function Index() {
  return (
    <main className="bg-black text-[#f5f5f7]">
      <StoryNav />
      <Hero />

      <TextSection
        id="origin"
        eyebrow="2003 — The Beginning"
        title="It started with a question nobody was seriously asking"
      >
        <p>
          In 2003, gasoline was cheap and the electric car was a punchline —
          slow, ugly, and short-ranged. Two Silicon Valley engineers,{" "}
          <span className="text-white">Martin Eberhard</span> and{" "}
          <span className="text-white">Marc Tarpenning</span>, disagreed. They
          founded <span className="text-white">Tesla Motors</span> on July 1,
          betting that laptop-style lithium-ion cells could power a car people
          actually wanted to drive.
        </p>
        <p>
          A year later, a PayPal co-founder named{" "}
          <span className="text-white">Elon Musk</span> led the company's Series A
          funding, became chairman, and put the vision into overdrive. CTO{" "}
          <span className="text-white">JB Straubel</span> turned the battery
          idea into real engineering. The name honored inventor Nikola Tesla —
          the plan was pure heresy: make electric desirable.
        </p>
      </TextSection>

      <ImageStory
        id="roadster"
        src="/images/roadster.jpg"
        alt="2008 Tesla Roadster"
        eyebrow="2008 — Proof of Concept"
        title="The Roadster"
        text="Tesla's first car wasn't a compromise. Built on a lithium-ion pack with roughly 245 miles of range and supercar acceleration, the Roadster proved electric could be thrilling. It nearly bankrupted the company — and it changed everything."
        align="left"
      />

      <TextSection
        eyebrow="2010–2012 — Going Public, Going Big"
        title="From near-death to a Wall Street debut"
      >
        <p>
          Tesla survived the 2008 financial crisis on the edge of collapse. In{" "}
          <span className="text-white">2010</span> it did the unthinkable: went
          public on the NASDAQ, the first American carmaker to IPO since Ford in
          1956, raising around $226 million.
        </p>
        <p>
          Then came the car that made Tesla serious. The{" "}
          <span className="text-white">Model S</span>, launched in 2012, paired a
          luxury sedan with a giant touchscreen, over-the-air software updates,
          and record safety scores. Suddenly the establishment was taking notes.
        </p>
      </TextSection>

      <Timeline />

      <ImageStory
        id="present"
        src="/images/model3.jpg"
        alt="Tesla Model 3"
        eyebrow="2017 — Scale"
        title="The Model 3"
        text="Designed to bring Tesla to the millions, the Model 3 pushed the company through 'production hell' and out the other side. It became the best-selling electric vehicle in the world and the engine of Tesla's transformation into a mass-market manufacturer."
        align="right"
      />

      <ImageStory
        src="/images/gigafactory.jpg"
        alt="Tesla Gigafactory"
        eyebrow="The Machine That Builds the Machine"
        title="Gigafactories"
        text="Tesla's real weapon isn't a single car — it's manufacturing at planetary scale. A growing network of Gigafactories across Nevada, Texas, Shanghai, and Berlin churns out cells, packs, and vehicles, driving costs down and volume up year after year."
        align="left"
      />

      <StatBand />

      <ImageStory
        src="/images/cybertruck.jpg"
        alt="Tesla Cybertruck"
        eyebrow="2023 — Radical by Design"
        title="The Cybertruck"
        text="Angular, stainless-steel, and impossible to ignore, the Cybertruck finally reached customers after years of hype. Love it or hate it, it signaled Tesla's willingness to gamble on designs no legacy automaker would dare ship."
        align="right"
      />

      <Future />
      <Footer />
    </main>
  );
}
