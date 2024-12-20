import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";
import { dark } from "@clerk/themes";

const mulishSans = Mulish({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mulish-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${mulishSans.variable} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
