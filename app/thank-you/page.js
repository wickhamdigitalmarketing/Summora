export default function ThankYou() {
  return (
    <main>
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1>Thank You!</h1>
        <p>Your request has been received.</p>
        <p>We’ll contact you shortly to discuss your project.</p>

        <div style={{ marginTop: "30px" }}>
          <a href="/" className="btn-dark">
            Return to Home
          </a>
        </div>
      </section>
    </main>
  );
}