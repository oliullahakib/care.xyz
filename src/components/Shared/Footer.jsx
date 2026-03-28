import Logo from './Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-base-200 text-accent p-10">
  <aside>
   <Logo/>
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="text-primary text-xl font-bold">Services</h6>
    <Link href="/" className="link link-hover">Branding</Link>
    <Link href="/" className="link link-hover">Design</Link>
    <Link href="/" className="link link-hover">Marketing</Link>
    <Link href="/" className="link link-hover">Advertisement</Link>
  </nav>
  <nav>
    <h6 className="text-primary text-xl font-bold">Company</h6>
    <Link href="/about" className="link link-hover">About us</Link>
    <Link href="/contact" className="link link-hover">Contact</Link>
    <Link href="/" className="link link-hover">Jobs</Link>
    <Link href="/" className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <h6 className="text-primary text-xl font-bold">Legal</h6>
    <a  className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer