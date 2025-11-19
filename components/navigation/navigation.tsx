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
}

function NavigationItemComponent({
  item,
  pathname,
  onItemClick,
  level = 0,
}: {
  item: NavigationItem;
  pathname: string;
  level?: number;
  onItemClick?: (id: string, href?: string) => void;
}) {
  const isActive =
    item.href &&
    item.href !== "#" &&
    (pathname === item.href || pathname.startsWith(item.href + "/"));

  return (
    <li className="relative">
      {isActive && (
        <span className="absolute -left-6 top-0 bottom-0 w-0.5 bg-white" />
      )}
      <Link
        href={item.href || "#"}
        onClick={() => onItemClick?.(item.id, item.href)}
        className={cn(
          "relative block w-full py-1.5 text-left transition-colors",
          level === 0 ? "pl-0" : level === 1 ? "pl-4" : "pl-8",
          isActive
            ? "font-semibold text-(--text-green-color) dark:text-(--text-green-color-dark)"
            : "font-normal text-zinc-400 hover:text-zinc-300"
        )}
      >
        {item.label}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="mt-0.5 space-y-0.5">
          {item.children.map((child) => (
            <NavigationItemComponent
              key={child.id}
              item={child}
              pathname={pathname}
              onItemClick={onItemClick}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navigation({ items, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full p-6">
      <ul className="space-y-0.5 pl-6">
        {items.map((item) => (
          <NavigationItemComponent
            key={item.id}
            item={item}
            pathname={pathname}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
}
