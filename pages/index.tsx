import type { NextPage } from "next";
import HomePageContent from "../src/components/Layout/HomePageContent";
import Seo from "../src/components/Layout/Seo/index";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <HomePageContent />
    </>
  );
};

export default Home;
