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
          site_name: "Spacemesh in 5-minutes",
          images: [
            {
              url: "https://spacemesh.fyi/images/og.png",
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
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
