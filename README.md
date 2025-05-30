This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What is this POC about?

This small POC is to demonstrate how we can approach client side routing with react-aria-components (RouterProvider) and NextJS Router (React Router / TanStack Router / Remix Router could be used as well).

Application is splitted into server-routing and client-routing routing. Both parts are identical with one small difference - client-side is wrapped with RouterProvider provided by react-aria-components. As a result in client-routing we can have:

- routing without full page reload
- re-render only what's needed (e.g. Nav component is not re-rendered, only content is)
- nice loaders when changing page (better UI/UX for end users)

### What about SSR?

Well, thanks to the NextJS [partial prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering#how-does-partial-prerendering-work) there is no visible difference in page source returned from server between client-routing and server-routing, so wrapping whole app inside `use client` doesn't make any difference (tested with static pages / dynamic pages / with and without fetching data).

### What about SSR?

All components from react-aria-components that displays a link \<a href>\ can accept `routerOptions` prop by default. For NextJS case this object has only [`scroll: boolean`](https://nextjs.org/docs/14/app/api-reference/functions/use-router#disabling-scroll-restoration) as property. There is no way to pass for example `prefetch` using `routerOptions`.

### How to pass prefetch or other stuff from NextJS link?

It's possible and quite easy to achieve, just create a component (`NextAriaLink` in case of this POC), make it accept props that you need and make `prefetch` possible programmatically using `router.prefetch(href)`.
