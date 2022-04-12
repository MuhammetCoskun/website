import type { NextPage } from "next";
import Head from "next/head";
import Body from "../src/components/Layout/Body";

const Home: NextPage = () => {
  return (
    <>
      {/* import as SEO */}
      <Head>
        <title>Muhammet Coskun | Front-end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body />
    </>
  );
};

export default Home;
