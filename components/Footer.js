import Link from 'next/link';

const Footer = ({ backToGuide = false, hideCta = false }) => {
  const callToAction = 'Ready to take the plunge with Spacemesh?';
  const link = 'https://spacemesh.io';
  const linkText = 'Get started now';

  return (
    <footer>
      {!hideCta ? (
        <div className='container narrow'>
          <h2>{callToAction}</h2>
          <Link href={link}>
            <a className='button'>{linkText}</a>
          </Link>
        </div>
      ) : null}
      <ul>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/disclaimer'>
            <a>Disclaimer</a>
          </Link>
        </li>
        <li>
          <a
            href='mailto:dafacto@proton.me?subject=I have a question about Spacemesh'
            className='contact'
          >
            Get in touch
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
