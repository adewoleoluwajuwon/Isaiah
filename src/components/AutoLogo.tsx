// src/components/AutoLogo.tsx
import React from "react";

// fallback: deterministic colors from name (not used when palette='rose')
function hashToHsl(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  const hue = h % 360;
  const hue2 = (hue + 40) % 360;
  return [`hsl(${hue} 80% 55%)`, `hsl(${hue2} 80% 45%)`] as const;
}

type Palette = "auto" | "rose";

function getColors(name: string, palette: Palette) {
  if (palette === "rose") {
    // deep red → warmer red
    return ["hsl(352 86% 54%)", "hsl(7 88% 46%)"] as const;
  }
  return hashToHsl(name);
}

export default function AutoLogo({
  name = "Isaiah",
  size = 32,
  className = "",
  palette = "rose",
}: {
  name?: string;
  size?: number;
  className?: string;
  palette?: Palette;
}) {
  const [c1, c2] = getColors(name, palette);
  const id = `g-${palette}-${name.replace(/\s+/g, "-")}`;
  const initial = (name.trim()[0] || "?").toUpperCase();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-label={`${name} logo`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>

      <circle cx="20" cy="20" r="19" fill={`url(#${id})`} />
      {/* theme-adaptive ring */}
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        className="stroke-white/70 dark:stroke-black/50"
        strokeWidth="2"
      />
      {/* letter (always high-contrast) */}
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        fontWeight={800}
        fontSize="18"
        className="fill-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
      >
        {initial}
      </text>
    </svg>
  );
}
