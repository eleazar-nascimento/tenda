import React from 'react';
import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,maximum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={
        description ||
        'Tenda: Aqui o seu sonho de conquistar a casa própria começa a se tornar realidade!'
      }
    />
    <meta property="og:site_name" content={title || 'Tenda'} />
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://www.tenda.com/loja-virtual/assets/img/ico-loja-virtual.png"
      />
    )}
  </Head>
);
