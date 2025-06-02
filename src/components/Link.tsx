"use client";

import { Link as AriaLink, PressEvent } from "react-aria-components";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  onPress?: (e: PressEvent) => void;
};

export function Link({ href, children, onPress }: LinkProps) {
  return (
    <AriaLink className="px-2 font-bold" href={href} onPress={onPress}>
      {children}
    </AriaLink>
  );
}
