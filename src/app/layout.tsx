"use client";

import "./globals.css";
import "@fontsource/poppins";

import { ReminderProvider } from "@/providers/reminder.provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Drink Water reminder</title>
      <body>
        <ReminderProvider>{children}</ReminderProvider>
      </body>
    </html>
  );
}
