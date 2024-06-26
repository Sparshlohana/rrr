import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapid Road ResQ",
  description:
    "Rapid Road ResQ is a application that helps drivers in distress to get help quickly and easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon"></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="h-fit">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
