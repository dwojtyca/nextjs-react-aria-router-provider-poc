import { NextAriaLink } from "@/components/NextAriaLink";

export default async function Home() {
  return (
    <>
      <h1>HOME</h1>
      <NextAriaLink href="/client-routing">CLIENT SIDE ROUTING</NextAriaLink>
      <NextAriaLink href="/server-routing">SERVER SIDE ROUTING</NextAriaLink>
    </>
  );
}
