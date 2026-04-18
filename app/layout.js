import Script from "next/script";
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

        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js-na2.hs-scripts.com/245951858.js"
        />

      </body>
    </html>
  );
}