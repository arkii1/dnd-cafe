import "./globals.css";
import Footer from "./ui/footer";

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
        <header className="fixed flex justify-center items-center bg-stone-100 w-screen px-8 z-50 shadow-lg">
          <svg
            className="h-xl w-xl my-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            fill="none"
            stroke="oklch(68.5% 0.169 237.323)"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="64 6 112 34 112 94 64 122 16 94 16 34" />

            <rect x="44" y="52" width="32" height="30" rx="4" />
            <path d="M76 58h6a8 8 0 0 1 0 16h-6" />

            <path d="M52 44c0-6 4-6 4-12" />
            <path d="M64 44c0-6 4-6 4-12" />
            <path d="M76 44c0-6 4-6 4-12" />
          </svg>
        </header>
        <main>
          {children}  
        </main>
        <Footer />
      </body>
    </html>
  );
}
