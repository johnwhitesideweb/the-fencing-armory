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
          <div className="socials">
            <a
              href="https://youtube.com/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.3-1C17.2 2.5 12 2.5 12 2.5h0s-5.2 0-8.3.3c-.4.1-1.4.1-2.3 1C.7 4.5.5 6.2.5 6.2S.2 8.2.2 10.1v1.8c0 1.9.3 3.9.3 3.9s.2 1.7.9 2.4c.9.9 2.1.9 2.7 1 2 .2 7.9.3 7.9.3s5.2 0 8.3-.3c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.4.9-2.4s.3-2 .3-3.9v-1.8c0-1.9-.3-3.9-.3-3.9zM9.8 14.6V7.9l6.4 3.4-6.4 3.3z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.2A4.8 4.8 0 1112 17a4.8 4.8 0 010-9.6zm0 1.8A3 3 0 1012 15a3 3 0 000-6zm5.2-2.3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
              </svg>
            </a>

            <a
              href="https://tiktok.com/@YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M21 8.2a6.6 6.6 0 01-3.8-1.2v7.3a5.6 5.6 0 11-4.8-5.5v2.3a3.3 3.3 0 102.5 3.2V2h2.3a4.3 4.3 0 003.8 4.3v1.9z"/>
              </svg>
            </a>
          </div>
          <span>© {new Date().getFullYear()} The Fencing Armory. All rights reserved.</span>
        </footer>
      </body>
    </html>
  );
}