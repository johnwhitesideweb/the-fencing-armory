import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";

export const metadata = {
  title: "The Fencing Armory",
  description: "Professional armory services for college and USA fencing teams. Based out of Stamford, CT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <footer className="footer">
          © {new Date().getFullYear()} The Fencing Armory. All rights reserved.
        </footer>
      </body>
    </html>
  );
}