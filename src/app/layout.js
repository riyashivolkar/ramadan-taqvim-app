import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramazon Taqvimi",
  description: "30 kunlik Ramazon Taqvimi shu yerda",
    generator: "Ramazon Taqvim",
    manifest: "/manifest.json",
    keywords: ["ramazon taqvimi", "30 kunlik ramazon taqvimi", "saharlik duosi", "iftorlik duosi", "ramazon taqvimi uzbekistan"],
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    authors: [
        { name: "Xurrambek Sadriddinov" },
        {
            name: "Xurrambek Sadriddinov",
            url: "https://www.linkedin.com/in/khurrambek-sadriddinov/",
        },
    ],
    viewport:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    icons: [
        { rel: "apple-touch-icon", url: "/icon-192x192.png" },
        { rel: "icon", url: "/icon-192x192.png" },
    ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
              <Header />
              {children}
      </body>
    </html>
  );
}
