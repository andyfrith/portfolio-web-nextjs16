"use client";

import { Navigation } from "./navigation";
const navItems = [
  {
    id: "hello",
    label: "hello.",
    href: "/",
    children: [],
  },
  {
    id: "experience",
    label: "experience.",
    href: "/timeline",
    children: [],
  },
  {
    id: "bio",
    label: "bio.",
    href: "/bio",
    children: [],
  },
];

export function NavigationMain() {
  function handleItemClick(id: string, href?: string) {
    if (href) {
      console.log("Navigate to:", href);
    }
  }

  return (
    <div>
      <Navigation items={navItems} onItemClick={handleItemClick} />
    </div>
  );
}
