import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Provider from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StableGen",
  description: "StableGen: Create stunning AI-generated images with ease. Unleash your creativity and bring your ideas to life through cutting-edge artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative max-w-7xl mx-auto`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            <Provider>
              <Header/>
              {children}
            </Provider>
          </ThemeProvider>
      </body>
    </html>
  );
}
