import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <ThemeProvider
          attribute="data-theme" // <html data-theme="…">
          defaultTheme="default" // same as your current light theme
          enableSystem // keep OS auto-switch if you like
          themes={[
            "default", // = your current  :root  light colours
            "default-dark", // = your current  .dark  colours
            "brand", // = shadcn palette (light)
            "brand-dark", // = shadcn palette (dark)
          ]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
