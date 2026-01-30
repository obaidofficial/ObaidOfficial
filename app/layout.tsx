import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Home/Navbar/NavigationMenu/Nav";
import Provider from "@/components/Hoc/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Home/Footer/Footer";

const font = Geologica({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obaid.",
  description: "Professional Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}
