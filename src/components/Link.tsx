"use client";

import { Link as AriaLink } from "react-aria-components";

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <AriaLink className="px-2 font-bold" href={href}>
      {children}
    </AriaLink>
  );
}
