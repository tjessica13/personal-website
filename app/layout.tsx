import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";

// adding dark mode
import { ThemeProvider } from 'next-themes'; 

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Jessica Tan Portfolio",
  description: "Jessica Tan Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html suppressHydrationWarning lang="en">
        <body
          className={`${jetBrains_Mono.className} antialiased`}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
  );
}
