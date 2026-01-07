import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Jersey_10 } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GameFont = Jersey_10({
  variable: "--font-game",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Learn App",
  description: "My Learn To Code App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${GameFont.variable} antialiased`}
        >
          <AppThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </AppThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
