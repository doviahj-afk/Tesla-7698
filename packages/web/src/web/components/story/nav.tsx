import { motion, useScroll, useTransform } from "motion/react";

export function StoryNav() {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(
    scrollYProgress,
    [0, 0.04],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"],
  );
  const blur = useTransform(scrollYProgress, [0, 0.04], ["blur(0px)", "blur(16px)"]);
  const border = useTransform(
    scrollYProgress,
    [0, 0.04],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"],
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: blur, borderBottom: "1px solid", borderColor: border }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="text-[0.95rem] font-800 tracking-[0.45em] font-bold text-white">
            T E S L A
          </a>
          <nav className="hidden gap-8 text-[0.8rem] font-medium text-white/60 md:flex">
            <a href="#origin" className="transition-colors hover:text-white">Origin</a>
            <a href="#timeline" className="transition-colors hover:text-white">Timeline</a>
            <a href="#present" className="transition-colors hover:text-white">Present</a>
            <a href="#future" className="transition-colors hover:text-white">Future</a>
          </nav>
        </div>
      </motion.header>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[#e31937]"
      />
    </>
  );
}
