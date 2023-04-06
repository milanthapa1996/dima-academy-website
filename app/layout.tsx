import "./globals.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "DIMA Academy",
  description: "NEPAL NO. 1 CADET PREPARATION INSTITUTE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <Navbar />
        <ScrollToTopButton />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
