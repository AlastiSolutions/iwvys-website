import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IWVYS",
  description: "Indian Wells Valley Youth Softball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
