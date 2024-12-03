import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Rexer Dev",
  description: "Software Developer from India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
