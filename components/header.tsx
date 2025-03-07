"use client";

import { Button } from "./ui/button";
import { GithubIcon, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
  const navigationItems = [
    {
      title: "All blocks",
      href: "/",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        </div>
        <div className="flex lg:justify-center">
          <p className="font-semibold">Tranzit</p>
        </div>
        <div className="flex justify-end w-full gap-4">
        <ModeToggle />
          <Button
            className="gap-2"
            onClick={() => {
              window.open("https://github.com/Alioo11/tranzit", "_blank");
            }}
          >
            Github <GithubIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-lg">{item.title}</span>
                      <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
