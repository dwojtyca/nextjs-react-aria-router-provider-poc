"use client";

import { useRouter } from "next/navigation";
import { Link } from "./Link";
import { useEffect } from "react";
import { PressEvent } from "react-aria-components";

type NextAriaProps = {
  href: string;
  children: React.ReactNode;
  onPress?: (e: PressEvent) => void;
  prefetch?: boolean;
};

export function NextAriaLink({
  href,
  children,
  onPress,
  prefetch,
}: NextAriaProps) {
  const router = useRouter();

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href);
    }
  }, [router, href, prefetch]);

  return (
    <Link href={href} onPress={onPress}>
      {children}
    </Link>
  );
}
