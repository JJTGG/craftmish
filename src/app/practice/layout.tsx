import type { ReactNode } from "react";
import "./practice.css";

export default function PracticeLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}