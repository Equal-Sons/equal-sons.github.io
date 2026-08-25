import { useEffect } from "react";

type SEOProps = {
  title: string;
};

const SEOCom = ({ title }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} - Frisk - Creative Agency & Portfolio React Template`;
  }, [title]);

  return null;
};

export default SEOCom;