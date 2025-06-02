"use client";

import { NextAriaLink } from "./NextAriaLink";

async function longApiRequest() {
  return await fetch("/api");
}

export function Nav({ base }: { base: string }) {
  return (
    <nav className=" py-2 bg-teal-500 text-yellow-950">
      <NextAriaLink
        href="/"
        onPress={async () => {
          const data = await longApiRequest();
          console.log("ONPRESS SUCCESS", data);
        }}
      >
        HOME
      </NextAriaLink>
      <NextAriaLink
        href={`${base}`}
        onPress={async () => {
          const data = await longApiRequest();
          console.log("ONPRESS SUCCESS", data);
        }}
      >
        POSTS
      </NextAriaLink>
      <NextAriaLink
        href={`${base}/photos`}
        onPress={async () => {
          const data = await longApiRequest();
          console.log("ONPRESS SUCCESS", data);
        }}
        prefetch
      >
        PHOTOS
      </NextAriaLink>
    </nav>
  );
}
