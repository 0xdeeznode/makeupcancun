import { Inter, Playfair_Display } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--title-font',
})