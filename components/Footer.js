import Link from "next/link"

const Footer = ({ backToGuide = false, hideCta = false }) => {
  return (
    <footer>
      {!hideCta ? (
        <div className="container narrow">
          <h2>Ready to take the plunge with Spacemesh?</h2>
          <Link href="https://spacemesh.io">
            <a className="button">Get started now</a>
          </Link>
        </div>
      ) : null}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/disclaimer">
            <a>Disclaimer</a>
          </Link>
        </li>
        <li>
          <a
            href="mailto:dafacto@proton.me?subject=I have a question about Spacemesh"
            className="contact"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get in touch
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
