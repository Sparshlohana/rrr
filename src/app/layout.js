import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "@/components/Navbar";

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
        <main className="h-fit">
          <GoogleOAuthProvider clientId="869395302751-bktjqm9l1v0k9jvjughn0gqbu9l9p0k1.apps.googleusercontent.com">
            {children}
          </GoogleOAuthProvider>
        </main>
      </body>
    </html>
  );
}
