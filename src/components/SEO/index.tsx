import Head from "next/head";

import { siteTitle } from "../../components/constants";

interface TitleProps {
  home: boolean;
  pageTitle: string;
}

type SEOProps = TitleProps;

function Title(props: TitleProps) {
  const { home, pageTitle } = props;

  return (
    <title>
      {home ? null : `${pageTitle} - `}
      {siteTitle}
    </title>
  );
}

export default function SEO(props: SEOProps) {
  const { home, pageTitle } = props;

  return (
    <Head>
      <Title pageTitle={pageTitle} home={home} />
      <link rel="icon" href="/nukopy-icon.png" />

      <meta name="description" content="nukopy's portfolio with Next.js" />
      {/* FIXME */}
      {/* <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
}
