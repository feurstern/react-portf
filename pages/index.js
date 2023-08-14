import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  const websiteTitle = 'Schatz in Tech'
  return (
    <>
      <Head>
        <title>{websiteTitle}</title>
        <meta name="description" content="f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
