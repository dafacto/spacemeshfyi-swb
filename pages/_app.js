import "../styles/globals.scss"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Spacemesh FYI"
        defaultTitle="SpacemeshFYI - A guide for beginners"
        description="If you’re new to Spacemesh and curious to learn more, you’ve come to the right place. In just a few quick lessons, you’ll learn all the basics."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://spacemesh.fyi",
          title: "Spacemesh FYI - A guide for beginners",
          description:
            "If you’re new to Spacemesh and curious to learn more, you’ve come to the right place. In just a few quick lessons, you’ll learn all the basics.",
          site_name: "Spacemesh FYI",
          images: [
            {
              url: "https://spacemesh.fyi/images/og-img.png",
              width: 1200,
              height: 630,
              alt: "Spacemesh FYI - A guide for beginners",
            },
          ],
        }}
        twitter={{
          handle: "@dafacto",
          site: "@dafacto",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#0f172a",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
