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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className={`${inter.className} ${titleFont.variable} bg-blanco`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
