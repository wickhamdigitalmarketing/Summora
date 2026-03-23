import Link from "next/link";
import { phoneDisplay, phoneHref } from "@/components/siteData";

export function Header() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/images/Summora Logo.png" alt="Summora Cabinetry logo" className="nav-logo" />
        <div className="nav-title">Summora Cabinetry</div>
      </div>
      <div className="nav-links">
        <a href={`tel:${phoneHref}`} className="call-pill">Call: {phoneDisplay}</a>
        <Link href="/" className="nav-text-link">Home</Link>
        <Link href="/gallery" className="nav-text-link">Gallery</Link>
        <Link href="/about" className="nav-text-link">About</Link>
        <Link href="/contact" className="nav-text-link">Contact</Link>
        <Link href="/contractors" className="nav-text-link">Contractors</Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/images/Summora Logo.png" alt="Summora Cabinetry logo" className="footer-logo" />
          <div>
            <div style={{ fontWeight: 700, color: '#1c1917' }}>Summora Cabinetry</div>
            <div>Beautiful kitchens. Professionally installed.</div>
          </div>
        </div>
        <a href={`tel:${phoneHref}`} style={{ fontWeight: 700, color: '#1c1917' }}>{phoneDisplay}</a>
      </div>
    </footer>
  );
}

export function FloatingCallButton() {
  return (
    <a href={`tel:${phoneHref}`} className="floating-call">Call {phoneDisplay}</a>
  );
}
