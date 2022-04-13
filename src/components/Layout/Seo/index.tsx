import React from "react";
import Head from "next/head";
import config from "../../config";
import { useRouter } from "next/router";

const Seo: React.FC = () => {
  const { title, description } = config;
  const router = useRouter();
  const getPathName = (path: string) => {
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2); //remove / from pathname and uppercase first letter.
  };

  return (
    <Head>
      <title>{`${getPathName(router.pathname)} ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
