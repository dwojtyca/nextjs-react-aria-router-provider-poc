// import Image from "next/image";

import { NextAriaLink } from "@/components/NextAriaLink";

type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

export default async function Home() {
  let photos = [];
  try {
    const data = await fetch("http://jsonplaceholder.typicode.com/photos");
    photos = await data.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <h1>PHOTOS</h1>
      {photos.map(({ id, albumId, title }: Photo) => (
        <NextAriaLink href={`/server-routing/photos/${id}`} key={id}>
          <h2>
            {title}, from {albumId}
          </h2>
          {/* <Image src={thumbnailUrl} alt={title} width="300" height="300" /> */}
        </NextAriaLink>
      ))}
    </>
  );
}
