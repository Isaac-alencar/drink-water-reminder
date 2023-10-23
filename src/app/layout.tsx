"use client";

import "./globals.css";
import "@fontsource/poppins";

import { SliderControlProvider } from "@/providers/GoalProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Drink Water reminder</title>
      <body>
        <SliderControlProvider>{children}</SliderControlProvider>
      </body>
    </html>
  );
}
