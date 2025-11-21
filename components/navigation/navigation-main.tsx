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
    href: "/experience",
    children: [],
  },
  {
    id: "bio",
    label: "bio.",
    href: "/bio",
    children: [],
  },
  // {
  //   id: "ai",
  //   label: "ai.",
  //   href: "/ai",
  //   children: [],
  // },
];

export interface NavigationMainProps {
  orientation?: "vertical" | "horizontal";
}

export function NavigationMain({
  orientation = "vertical",
}: NavigationMainProps) {
  function handleItemClick(id: string, href?: string) {
    if (href) {
      console.log("Navigate to:", href);
    }
  }

  return (
    <div>
      <Navigation
        items={navItems}
        onItemClick={handleItemClick}
        orientation={orientation}
      />
    </div>
  );
}
