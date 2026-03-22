import { styleSections } from "@/components/siteData";

export const metadata = { title: "Gallery | Summora Cabinetry" };

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Cabinet Style Gallery</h1>
          <p className="muted">Explore the 8 cabinet looks we use to help homeowners choose quickly and confidently.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {styleSections.map((style) => (
            <div className="gallery-style" key={style.name}>
              <h2>{style.name}</h2>
              <p>{style.caption}</p>
              <div className="gallery-grid">
                {style.images.map((image) => (
                  <img key={image} src={image} alt={style.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
