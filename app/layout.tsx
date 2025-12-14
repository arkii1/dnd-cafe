import "./globals.css";
import {
  Bars3Icon,
} from '@heroicons/react/24/outline';
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/ab7546c976eeaf64ef57c6a39628c127?family=Quasimoda-SemiBold" rel="stylesheet"></link>
      </head>
      <body
        className={`antialiased`}
      >
        <header className="fixed flex justify-between items-center bg-stone-100 w-screen px-8 z-50">
          <Image height={96} width={96} alt="DnD Cafe logo" src="/icon.png"/>
          <Bars3Icon className="text-sky-500 h-10 w-10 cursor-pointer"/>
        </header>
        <main>
          {children}  
        </main>
      </body>
    </html>
  );
}
