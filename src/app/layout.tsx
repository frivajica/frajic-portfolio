import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  applicationName: 'Frajic Portfolio',
  title: "Frajic",
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "Personal web site",
  manifest: '/manifest.json',
  themeColor: 'black',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
