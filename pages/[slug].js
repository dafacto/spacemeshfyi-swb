import { getReasons, getBySlug } from "../lib/api"
import { NextSeo } from "next-seo"
import Link from "next/link"
import markdownToHtml from "../lib/markdownToHtml"
import cx from "classnames"
import Footer from "../components/Footer"
import PostScroller from "../components/PostScroller"

const Reason = ({ post, additionalPages = [] }) => {
  const { number, title, intro, content } = post

  const isReason = number ? true : false

  return (
    <>
      <NextSeo title={title} description={intro} />
      <header className={cx({ alt: number, bg: !number })}>
        <div className="container narrow">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="Home" />
            </a>
          </Link>
          <strong>Spacemesh FYI</strong>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>
      <main>
        <section>
          <div
            className="container narrow content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
        {additionalPages.length ? (
          <div className="bg">
            <PostScroller items={additionalPages} horizontal={true} />
          </div>
        ) : null}
      </main>
      <Footer backToGuide={!isReason} />
    </>
  )
}

export default Reason

export async function getStaticProps({ params }) {
  const post = getBySlug(params.slug, [
    "number",
    "title",
    "intro",
    "content",
    "type",
  ])
  const content = await markdownToHtml(post.content || "")

  let additionalPages = []

  if (post.type === "reason") {
    additionalPages = getReasons(["number", "slug", "title", "intro", "type"])
  }

  return {
    props: {
      post: {
        ...post,
        content,
      },
      additionalPages,
    },
  }
}

export async function getStaticPaths() {
  const reasons = getReasons(["slug"])

  return {
    paths: reasons.map((item) => {
      return {
        params: {
          slug: String(item.slug),
        },
      }
    }),
    fallback: false,
  }
}
