import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Craftmish",
  title: {
    default: "Craftmish — Understand. Build. Demonstrate.",
    template: "%s | Craftmish"
  },
  description:
    "Explore connected software development knowledge, follow learning paths, and build practical skills through understanding, application, and evidence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}