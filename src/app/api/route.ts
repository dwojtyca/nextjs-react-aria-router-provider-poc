import { wait } from "../utils";

export async function GET() {
  await wait();
  const data = { message: "Hello from Next.js!" };
  return Response.json({ data });
}
