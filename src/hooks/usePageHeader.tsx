import React from "react";
import { useRouter } from "next/router";

const getPathName = (path: string): string => {
  return path.slice(1).charAt(0).toUpperCase() + path.slice(2); //remove / from pathname and uppercase first letter.
};

const usePageHeader = (): string => {
  const router = useRouter();
  const pathName = router.pathname;
  return getPathName(pathName);
};

export default usePageHeader;
