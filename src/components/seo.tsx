import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Frisk` : 'Frisk - Creative Agency & Portfolio React Template'}</title>
      <meta name="description" content="Frisk - Creative Agency & Portfolio HTML Template" />
      <meta name="keywords" content="Frisk - Creative Agency & Portfolio HTML Template" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;