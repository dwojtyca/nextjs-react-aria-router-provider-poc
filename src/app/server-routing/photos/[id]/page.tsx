// import Image from "next/image";

type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
};

export default async function Home({ params }: { params: { id: string } }) {
  let photo: Photo | null = null;
  try {
    const data = await fetch(
      `http://jsonplaceholder.typicode.com/photos/${params.id}`
    );
    photo = await data.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <h1>SINGLE PHOTO - {photo?.id}</h1>
      <div>
        <h2>
          {photo?.title}, from {photo?.albumId}
        </h2>
        {/* <Image src={thumbnailUrl} alt={title} width="300" height="300" /> */}
      </div>
    </>
  );
}
