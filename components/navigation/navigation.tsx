"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface NavigationProps {
  items: NavigationItem[];
  onItemClick?: (id: string, href?: string) => void;
  orientation?: "vertical" | "horizontal";
}

function NavigationItemComponent({
  item,
  pathname,
  onItemClick,
  level = 0,
  orientation = "vertical",
}: {
  item: NavigationItem;
  pathname: string;
  level?: number;
  onItemClick?: (id: string, href?: string) => void;
  orientation?: "vertical" | "horizontal";
}) {
  const isActive =
    item.href &&
    item.href !== "#" &&
    (pathname === item.href || pathname.startsWith(item.href + "/"));

  return (
    <li className="relative">
      {isActive && orientation === "vertical" && (
        <span className="absolute -left-6 top-0 bottom-0 w-0.5 bg-white" />
      )}
      {isActive && orientation === "horizontal" && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white" />
      )}
      <Link
        href={item.href || "#"}
        onClick={() => onItemClick?.(item.id, item.href)}
        className={cn(
          "relative block transition-colors",
          orientation === "vertical"
            ? "w-full py-1.5 text-left"
            : "px-3 py-1 text-center",
          level === 0
            ? "pl-0"
            : level === 1
              ? "pl-4"
              : "pl-8",
          isActive
            ? "font-semibold text-(--text-green-color) dark:text-(--text-green-color-dark)"
            : "font-normal text-zinc-400 hover:text-zinc-300"
        )}
      >
        {item.label}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul
          className={cn(
            orientation === "vertical"
              ? "mt-0.5 space-y-0.5"
              : "ml-0.5 flex space-x-0.5"
          )}
        >
          {item.children.map((child) => (
            <NavigationItemComponent
              key={child.id}
              item={child}
              pathname={pathname}
              onItemClick={onItemClick}
              level={level + 1}
              orientation={orientation}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navigation({
  items,
  onItemClick,
  orientation = "vertical",
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "w-full",
        orientation === "vertical" ? "p-6" : "p-0"
      )}
    >
      <ul
        className={cn(
          orientation === "vertical"
            ? "space-y-0.5 pl-6"
            : "flex items-center gap-4"
        )}
      >
        {items.map((item) => (
          <NavigationItemComponent
            key={item.id}
            item={item}
            pathname={pathname}
            onItemClick={onItemClick}
            orientation={orientation}
          />
        ))}
      </ul>
    </nav>
  );
}
