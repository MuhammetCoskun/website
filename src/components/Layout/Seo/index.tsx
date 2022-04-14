import React from "react";
import Head from "next/head";
import config from "../../config";
import usePageTitle from "../../../hooks/usePageHeader";

const Seo: React.FC = () => {
  const { title, description } = config;
  const pageTitle = usePageTitle();

  return (
    <Head>
      <title>{`${pageTitle} ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Seo;
