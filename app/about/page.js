export const metadata = { title: "About | Summora Cabinetry" };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About Summora Cabinetry</h1>
          <p className="muted">A premium cabinet company focused on clean design, strong value, and professional installation.</p>
        </div>
      </section>
      <section className="section">
        <div className="container form-wrap">
          <div className="card">
            <p className="muted" style={{ margin: 0 }}>
              Summora Cabinetry delivers complete kitchen cabinet solutions — from design to installation.
              We help homeowners upgrade their space with stylish, durable cabinets and a smooth,
              professional process from start to finish.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
