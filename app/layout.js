import { inter, titleFont } from '@/styles/font'
import "./globals.css";
import Navbar from "@/components/main/Navbar";


export const metadata = {
  title: "Makeup In Cancun",
  description: "Bridal Makeup by Fernanda Montealegre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${titleFont.variable} bg-blanco`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
