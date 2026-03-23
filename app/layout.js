import "./globals.css";
import { Header, Footer, FloatingCallButton } from "@/components/SiteShell";

export const metadata = {
  title: "Summora Cabinetry",
  description: "Beautiful kitchens. Professionally installed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
