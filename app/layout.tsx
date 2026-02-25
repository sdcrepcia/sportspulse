import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportsPulse",
  description: "Live scores, game times, and TV listings for NFL, NBA, MLB, MLS, and more.",
  openGraph: {
    title: "SportsPulse",
    description: "Live scores, game times, and TV listings",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`} style={{ backgroundColor: "rgb(3 7 18)", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
