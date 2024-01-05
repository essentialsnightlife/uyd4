import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { setTitle, stripHtml } from "../../helpers";

type SeoProps = {
  title: string;
  description: string;
  image: string;
  type: string;
};

export default function Seo({ title, description, type, image }: SeoProps) {
  const { pathname } = useLocation();

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{setTitle(title)}</title>
      <meta name="description" content={stripHtml(description)} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={setTitle(title)} />
      <meta property="og:description" content={stripHtml(description)} />
      <meta property="og:image" content={`https://useyourdream.com${image}`} />
      <meta property="og:url" content={`https://useyourdream.com${pathname}`} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content="UYD" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={stripHtml(description)} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
