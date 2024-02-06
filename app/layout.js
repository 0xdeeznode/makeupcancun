import { inter, titleFont } from '@/styles/font'
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from '@/components/main/Footer';
import Head from 'next/head';


export const metadata = {
  title: "Makeup In Cancun",
  description: "Bridal Makeup by Fernanda Montealegre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${inter.className} ${titleFont.variable} bg-blanco`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
