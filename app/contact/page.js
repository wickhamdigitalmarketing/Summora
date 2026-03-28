
import { phoneDisplay, phoneHref } from "@/components/siteData";

export const metadata = { title: "Contact | Summora Cabinetry" };

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Request a Quote</h1>
          <p className="muted">
            Call or text {phoneDisplay} for the fastest response, or send your project details below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <div className="card">

            <div style={{ marginBottom: 18 }}>
              <a href={`tel:${phoneHref}`} className="btn-dark">
                Call or Text {phoneDisplay}
              </a>
            </div>

            <p className="note">
              Most quote requests receive a response within 24 hours.
            </p>

            <form
              className="form-grid"
              action="https://formspree.io/f/meepolnk"
              method="POST"
            >
             
              <input type="hidden" name="_subject" value="New Quote Request - Summora" />
         <input type="hidden" name="_redirect" value="https://summorahome.com/thank-you" />
             
              <input
                className="input"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="input"
                name="phone"
                placeholder="Phone"
                required
              />

              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />

              <textarea
                className="textarea"
                name="details"
                placeholder="Project details, style preference, rough measurements, or inspiration"
                required
              />

              <button className="btn-dark" type="submit">
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}