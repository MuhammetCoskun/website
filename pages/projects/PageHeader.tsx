import React from "react";
import ResponsiveTypography from "../../src/components/UI/ResponsiveTypography";
import usePageTitle from "../../src/hooks/usePageHeader";

const PageHeader: React.FC = () => {
  const pageTitle = usePageTitle();
  return (
    <ResponsiveTypography variant="h3">
      <strong>{pageTitle}</strong>
    </ResponsiveTypography>
  );
};

export default PageHeader;
//TODO can be used everypage!
