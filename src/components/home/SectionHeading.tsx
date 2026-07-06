import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  variant?: "light" | "dark";
  className?: string;
};

// Shared homepage section header: eyebrow label, an elegant gold divider mark,
// title, and optional description — keeps every section on the same rhythm.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
  className = "",
}: Props) {
  const isDark = variant === "dark";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment} ${align === "center" ? "mx-auto max-w-2xl" : ""} ${className}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          isDark ? "text-accent-400" : "text-accent-700"
        }`}
      >
        {eyebrow}
      </p>

      <span
        className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className={`h-px w-8 ${isDark ? "bg-accent-400/50" : "bg-accent-400/70"}`} />
        <span className={`h-1.5 w-1.5 rotate-45 ${isDark ? "bg-accent-400" : "bg-accent-500"}`} />
        <span className={`h-px w-8 ${isDark ? "bg-accent-400/50" : "bg-accent-400/70"}`} />
      </span>

      <h2
        className={`mt-4 font-serif text-3xl leading-[1.15] sm:text-4xl ${
          isDark ? "text-white" : "text-primary-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-primary-200" : "text-neutral-700"
          } ${align === "center" ? "max-w-xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
