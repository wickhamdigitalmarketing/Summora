export const metadata = { title: "Contractors | Summora Cabinetry" };

export default function ContractorsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Affiliate Cabinet Installer</h1>
          <p className="muted">
            We’re actively onboarding 1–2 reliable installers for ongoing cabinet projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap" style={{ maxWidth: 1040 }}>
          <div
            className="two-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: 24 }}
          >
            <div className="card">
              <h3>What You Get</h3>
              <p className="muted">
                • Consistent, pre-sold jobs (no selling)
                <br />
                • Clear scope + materials ready
                <br />
                • Fast, predictable payments
                <br />
                • Repeat work if quality is high
              </p>
            </div>

            <div className="card">
              <h3>Minimum Requirements</h3>
              <p className="muted">
                • Proven cabinet install experience
                <br />
                • Own tools + transportation
                <br />
                • Clean, professional finish work
                <br />
                • Reliable communication + punctuality
              </p>
            </div>
          </div>

          <div className="card" style={{ marginBottom: 24, background: "#fafaf9" }}>
            <h3>Quick Qualification</h3>
            <p className="muted">
              We prioritize installers who can handle full kitchen installs independently.
            </p>
            <p className="muted" style={{ marginBottom: 0 }}>
              ✔ Have you installed 5+ full kitchens?
              <br />
              ✔ Can you hang uppers, set bases, and finish trim?
              <br />
              ✔ Comfortable reading basic layouts?
              <br />
              ✔ Can you complete jobs cleanly without callbacks?
            </p>
          </div>

          <div className="card">
            <h3>Apply Now</h3>

            <form
              className="form-grid"
              action="https://formspree.io/f/mojpjdzp"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contractor Application - Summora"
              />

              <input
                type="hidden"
                name="_redirect"
                value="https://summorahome.com/thank-you-contractor"
              />

              <input
                type="hidden"
                name="formType"
                value="Contractor Application"
              />

              <input
                className="input"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                className="input"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <input
                className="input"
                name="serviceArea"
                placeholder="City / Service Area"
                required
              />

              <select className="select" name="experience" defaultValue="" required>
                <option value="" disabled>
                  Years of Cabinet Install Experience
                </option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>

              <select className="select" name="soloInstall" defaultValue="" required>
                <option value="" disabled>
                  Can you complete a full kitchen install solo?
                </option>
                <option>Yes</option>
                <option>With a helper</option>
                <option>No</option>
              </select>

              <textarea
                className="textarea"
                name="recentJobs"
                placeholder="Describe recent cabinet jobs (type, size, finishes)"
                required
              />

              <input
                className="input"
                name="portfolio"
                placeholder="Link to photos of your work (or say you will text them)"
              />

              <select className="select" name="availability" defaultValue="" required>
                <option value="" disabled>
                  When are you available to start?
                </option>
                <option>Immediately</option>
                <option>1-2 weeks</option>
                <option>3+ weeks</option>
              </select>

              <button className="btn-dark" type="submit">
                Submit Application
              </button>

              <p className="note">
                Qualified applicants will be contacted for a quick phone screen.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}