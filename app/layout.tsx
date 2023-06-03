import "./globals.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>DIMA Academy</title>
        <meta
          name="description"
          content="NEPAL NO. 1 CADET PREPARATION INSTITUTE."
          key="desc"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3056250846196186"
          crossOrigin="anonymous"
        ></script>
      </Head>
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
