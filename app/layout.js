import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makeup In Cancun",
  description: "Bridal Makeup by Fernanda Montealegre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blanco`}>
        <Navbar />
        {children}
        <div className="h-[250vh]"/>
      </body>
    </html>
  );
}
