import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { setTitle, stripHtml } from "../../lib";

type Props = {
  title: string;
  description: string;
  name: string;
  type: string;
  image: string;
};

export default function SEO({ title, description, name, type, image }: Props) {
  const { pathname } = useLocation();

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{setTitle(title)}</title>
      <meta name="description" content={stripHtml(description)} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:title" content={setTitle(title)} />
      <meta property="og:description" content={stripHtml(description)} />
      <meta content={`https://useyourdream.netlify.app/${image}`} property="og:image" />
      <meta property="og:url" content={`https://useyourdream.netlify.app${pathname}`} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={stripHtml(description)} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
