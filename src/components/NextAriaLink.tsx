"use client";

import { useRouter } from "next/navigation";
import { Link } from "./Link";
import { useEffect } from "react";

type NextAriaProps = {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean;
};

export function NextAriaLink({ href, children, prefetch }: NextAriaProps) {
  const router = useRouter();

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href);
    }
  }, [router, href, prefetch]);

  return <Link href={href}>{children}</Link>;
}
