import "./globals.css";
import {
  Bars3Icon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>DnD Cafe </title>
        <link href="https://db.onlinewebfonts.com/c/ab7546c976eeaf64ef57c6a39628c127?family=Quasimoda-SemiBold" rel="stylesheet"></link>
      </head>
      <body
        className={`antialiased`}
      >
        <header className="fixed flex justify-between items-center bg-stone-100 w-screen px-8 z-50">
          <Image height={96} width={96} alt="DnD Cafe logo" src="/icon.png"/>
          <Navbar />
        </header>
        <main>
          {children}  
        </main>
        <Footer />
      </body>
    </html>
  );
}
