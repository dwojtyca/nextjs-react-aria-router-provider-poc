export default async function Home() {
  let posts = [];
  try {
    const data = await fetch("http://jsonplaceholder.typicode.com/posts");
    posts = await data.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <h1>POSTS</h1>
      {posts.map(
        ({
          id,
          userId,
          title,
          body,
        }: {
          id: number;
          userId: number;
          title: string;
          body: string;
        }) => (
          <div key={id}>
            <h2>
              {title}, by {userId}
            </h2>
            <span>{body}</span>
          </div>
        )
      )}
    </>
  );
}
