import Link from "next/link";
import { phoneDisplay, phoneHref, styleSections } from "@/components/siteData";

const heroImage = styleSections[0].images[0];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Beautiful white shaker kitchen" className="hero-image" />
        </div>
        <div className="hero-overlay" />
        <img src="/images/Summora Logo.png" alt="Summora logo" className="hero-logo-corner" />
        <img src="/images/Summora Logo.png" alt="" aria-hidden="true" className="hero-watermark" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>Beautiful Kitchens. Professionally Installed.</h1>
            <p>
              Upgrade your kitchen with high-quality cabinets, expert installation, and a clean,
              modern finish — without the stress.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-light">Get My Quote</Link>
              <a href={`tel:${phoneHref}`} className="btn-dark">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-item">✔ Professional Installation Included</div>
          <div className="trust-item">✔ Fast Turnaround</div>
          <div className="trust-item">✔ Modern Styles That Add Value</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Simple 3-Step Process</h2>
          <div className="three-grid">
            <div className="card">
              <h3>1. Send Your Kitchen</h3>
              <p className="muted">Text us a photo or rough measurements of your space.</p>
            </div>
            <div className="card">
              <h3>2. Get a Fast Quote</h3>
              <p className="muted">We’ll price your cabinets and installation quickly.</p>
            </div>
            <div className="card">
              <h3>3. We Install</h3>
              <p className="muted">Our team delivers and installs your new kitchen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Kitchen Pricing</h2>
          <div className="pricing-grid">
            <div className="card">
              <div className="price-label">Essential</div>
              <div className="price-amount">Starting at $8,900</div>
              <p className="muted">Great for smaller kitchens and rentals.</p>
            </div>
            <div className="card">
              <div className="price-label">Signature</div>
              <div className="price-amount">$11,000–$14,500</div>
              <p className="muted">Most popular for homeowners wanting premium looks without showroom markup.</p>
            </div>
            <div className="card price-card-dark">
              <div className="price-label">Luxury</div>
              <div className="price-amount">$15,000+</div>
              <p style={{ color: '#d6d3d1', lineHeight: 1.7 }}>High-end finishes, custom-feel layouts, and larger kitchens.</p>
            </div>
          </div>
          <div className="center-cta">
            <Link href="/contact" className="btn-dark">Get Exact Pricing</Link>
          </div>
        </div>
      </section>

      <section className="section service-area">
        <div className="container" style={{ textAlign: 'center', maxWidth: 980 }}>
          <h2>Where We Work</h2>
          <p className="muted" style={{ fontSize: '1.08rem' }}>
            Summora Cabinetry operates through a growing network of installation teams, allowing us to
            deliver consistent, high-quality cabinet projects across multiple regions.
          </p>
          <p className="muted">
            We are currently serving select areas and actively expanding. Contact us to check availability in your location.
          </p>
          <Link href="/contact" className="btn-dark">Check Availability</Link>
        </div>
      </section>

      <section className="section final-cta">
        <img src="/images/Summora Logo.png" alt="" aria-hidden="true" className="watermark" />
        <div className="container inner">
          <h2>Ready to Upgrade Your Kitchen?</h2>
          <p style={{ marginBottom: 24 }}>Get a fast quote and see what your new cabinets could look like.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn-light">Request Quote</Link>
            <a href={`tel:${phoneHref}`} className="btn-gold">Call {phoneDisplay}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
