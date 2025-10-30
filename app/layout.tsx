import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

// 👉 Police locale ARP
const arp = localFont({
  src: [
    { path: "../public/fonts/ARP-20.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/ARP-40.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/ARP-80.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/ARP-150.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/ARP-240.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-arp",
});

// 👉 Variante Display
const arpDisplay = localFont({
  src: [
    { path: "../public/fonts/ARPDisplay-20.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/ARPDisplay-40.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/ARPDisplay-80.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/ARPDisplay-150.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/ARPDisplay-240.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-arp-display",
});

// 👉 Google Font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Hardwood Shutter Company - Volets en Bois Luxueux",
  description: "Élevez votre espace avec des volets en bois dur de qualité supérieure. Design sur mesure, fabrication et installation professionnelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${arp.variable} ${arpDisplay.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}