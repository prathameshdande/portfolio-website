import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Prathamesh Dande",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body className="bg-white text-black dark:bg-darkTheme dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
