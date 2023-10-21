import type { Metadata } from "next";

import "./globals.css";
import "@fontsource/poppins";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Drink Water Reminder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
