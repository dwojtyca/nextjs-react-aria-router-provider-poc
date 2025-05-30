import { NextAriaLink } from "./NextAriaLink";

export function Nav({ base }: { base: string }) {
  return (
    <nav className=" py-2 bg-teal-500 text-yellow-950">
      <NextAriaLink href="/">HOME</NextAriaLink>
      <NextAriaLink href={`${base}`}>POSTS</NextAriaLink>
      <NextAriaLink href={`${base}/photos`} prefetch>
        PHOTOS
      </NextAriaLink>
    </nav>
  );
}
