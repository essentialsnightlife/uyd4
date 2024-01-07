import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { setTitle, stripHtml } from "../../helpers";

type SeoProps = {
  title?: string;
  description: string;
  image: string;
};

export default function Seo({ title, description, image }: SeoProps) {
  const { pathname } = useLocation();

  return (
    <Helmet>
      {/* Standard metadata tags */}
      {title && <title>{setTitle(title)}</title>}
      <meta name="description" content={stripHtml(description)} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      {title && <meta property="og:title" content={setTitle(title)} />}
      <meta property="og:description" content={stripHtml(description)} />
      <meta property="og:url" content={`https://useyourdream.com${pathname}`} />
      <meta property="og:image" content={`https://useyourdream.com${image}`} />
      <meta property="og:image:secure_url" content={`https://useyourdream.com${image}`} />
      <meta property="og:image:type" content="image/png" />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      {/* <meta name="twitter:creator" content="UYD" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={setTitle(title)} />
      <meta name="twitter:image" content={`https://useyourdream.com${image}`} />
      <meta name="twitter:description" content={stripHtml(description)} /> */}
      {/* End Twitter tags */}
    </Helmet>
  );
}
