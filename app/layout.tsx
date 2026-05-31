import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO & Google Business Tracker",
  description: "Track local SEO rankings and Google Business Profile performance for your business."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d76430a7-285a-4ca2-9c8e-f8260fbcc275"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
