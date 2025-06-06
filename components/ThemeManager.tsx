"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const colorPalettes = [
  "default",
  "orange",
  "violet",
  "red",
  "yellow",
  "blue",
] as const;

export function ThemeManager() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const mode = theme?.endsWith("-dark") ? "dark" : "light";
  const palette = theme?.replace(
    /-dark$/,
    ""
  ) as (typeof colorPalettes)[number];

  const switchMode = (m: "light" | "dark") =>
    setTheme(m === "dark" ? `${palette}-dark` : palette);

  const switchPalette = (p: (typeof colorPalettes)[number]) =>
    setTheme(mode === "dark" ? `${p}-dark` : p);

  return (
    <div className="flex items-center gap-3">
      {/* Mode toggle */}
      {mode === "dark" ? (
        <Button
          variant="ghost"
          onClick={() => switchMode("light")}
          className="cursor-pointer"
        >
          <Sun strokeWidth={1.25} />
        </Button>
      ) : (
        <Button
          variant="ghost"
          onClick={() => switchMode("dark")}
          className="cursor-pointer"
        >
          <Moon strokeWidth={1.25} />
        </Button>
      )}

      {/* Palette options */}
      <Popover>
        <PopoverTrigger>
          <Palette strokeWidth={1.25} />
        </PopoverTrigger>
        <PopoverContent className="w-max">
          <div className="flex flex-col gap-3">
            {colorPalettes.map((c) => (
              <span
                key={c}
                onClick={() => switchPalette(c)}
                className={`h-[25px] w-[25px] rounded-full cursor-pointer ${colorClassMap[c]}`}
                title={c}
              ></span>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const colorClassMap: Record<string, string> = {
  default: "bg-neutral-400",
  orange: "bg-orange-500",
  violet: "bg-violet-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  blue: "bg-blue-500",
};
