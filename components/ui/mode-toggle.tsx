"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const {Tranzit} = require("tranzit");

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    const transitioner = new Tranzit();

    transitioner.startTransition(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    });
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggleTheme}>
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0  transition-all dark:-rotate-90 scale-100 dark:scale-0" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 scale-0 dark:scale-100" />
      )}
    </Button>
  );
}
