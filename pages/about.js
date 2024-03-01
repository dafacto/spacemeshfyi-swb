import Link from 'next/link';
import Footer from '../components/Footer';

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className='container narrow'>
          <Link href='/'>
            <a>
              <img src='/images/logo.png' />
            </a>
          </Link>
          <h1>About this site</h1>
          <p>Teaching through simplicity</p>
        </div>
      </header>
      <main>
        <section>
          <div className='container narrow'>
            <p>
							<strong>Who’s behind this site?</strong> — As someone interested in information design, and noting that 
							Spacemesh was missing a resource suitable for a person’s first 
							contact with the project, I created this site as the beginner’s 
							guide that I would send to a friend, or share on social media.
            </p>
            <p>
              It specifically avoids confusing technology that’s not essential
              for the average person to get involved.
            </p>
            <p>
              I’m also the creator of <a href='https://smeshwallet.com'>SmeshWallet</a>, the popular free, and easy-to-use web wallet for Spacemesh.
            </p>
            <p>
              You can learn more about me{' '}
              <a href='https://dafacto.com/about'>at my personal site</a>, find
              me <a href='http://twitter.com/dafacto'>on Twitter</a>, or{' '}
              <a
                href='mailto:dafacto@proton.me?subject=I have a question about Spacemesh'
                className='contact'
              >
                send an email
              </a>
              .
            </p>
            <p>
              <strong>Acknowledgements</strong> — I'd like to say thank you to all those who provided useful feedback from the Spacemesh community, including @earl, @bheleu, and @dmytro.
            </p>
            <p>
              <strong>Donations</strong> — For anyone interested in donating to the effort of maintaining
              this feel free to send a tip to: <pre>sm1qqqqqqzgemakwhq9sg552pl3f6mapxet242q2hg6t9lsm</pre> Or, alternatively, share the site with someone!
            </p>
            <p>
              <strong>Copyright</strong> — Just in case it’s necessary, this entire site is copyright{' '}
              {currentYear}!
            </p>
          </div>
        </section>
      </main>
      <Footer hideCta={true} />
    </>
  );
};

export default About;
