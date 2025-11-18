"use client";

/**
 * Example usage of the Navigation component
 *
 * This demonstrates how to use the Navigation component with hierarchical items
 * matching the design shown in the reference image.
 */

import { Navigation } from "./navigation";

const exampleItems = [
  {
    id: "introduction",
    label: "Introduction",
    href: "#introduction",
    children: [
      {
        id: "philosophy",
        label: "Philosophy",
        href: "#philosophy",
      },
      {
        id: "documentation-purpose",
        label: "Documentation purpose",
        href: "#documentation-purpose",
      },
    ],
  },
  {
    id: "installation",
    label: "Installation",
    href: "#installation",
    children: [
      {
        id: "clone-project",
        label: "Clone the project",
        href: "#clone-project",
      },
      {
        id: "enable-corepack",
        label: "Enable corepack",
        href: "#enable-corepack",
      },
      {
        id: "install-dependencies",
        label: "Install dependencies",
        href: "#install-dependencies",
      },
      {
        id: "run-project",
        label: "Run the project",
        href: "#run-project",
      },
    ],
  },
];

export function NavigationExample() {
  function handleItemClick(id: string, href?: string) {
    if (href) {
      // Handle navigation logic here
      console.log("Navigate to:", href);
    }
  }

  return (
    <div className="bg-black">
      <Navigation items={exampleItems} onItemClick={handleItemClick} />
    </div>
  );
}
