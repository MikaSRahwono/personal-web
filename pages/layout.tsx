import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Mika — Personal Site",
  description: "One‑page portfolio with experience, projects, blogs, and social links.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
