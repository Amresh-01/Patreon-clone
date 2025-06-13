import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me A Chai- A website for fund your project",
  description: "This website a crowd funding for chai lover.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar/>
          <div className="min-h-[87vh] bg-[#000000] 
          bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">

          {children}
             </div>
        <Footer/>
      </body>
    </html>
  );
}
