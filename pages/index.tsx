import type { NextPage } from "next";
import Head from "next/head";
import Body from "../src/components/Layout/Body";
import Seo from "../src/components/Layout/Seo/index";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Body />
    </>
  );
};

export default Home;
