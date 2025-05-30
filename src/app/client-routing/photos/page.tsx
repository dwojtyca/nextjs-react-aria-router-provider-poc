// import Image from "next/image";

import { wait } from "@/app/utils";
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
    await wait();
    const data = await fetch("http://jsonplaceholder.typicode.com/photos");
    photos = await data.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <h1>PHOTOS</h1>
      {photos.map(({ id, albumId, title }: Photo) => (
        <NextAriaLink href={`/client-routing/photos/${id}`} key={id}>
          <h2>
            {title}, from {albumId}
          </h2>
          {/* <Image src={thumbnailUrl} alt={title} width="300" height="300" /> */}
        </NextAriaLink>
      ))}
    </>
  );
}
