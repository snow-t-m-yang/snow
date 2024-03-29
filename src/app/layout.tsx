import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ModeToggler } from "@/components/mode-toggler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snow House",
  description: "Snow's playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
