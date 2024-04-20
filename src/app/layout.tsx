import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SpaceVerse",
  description: "A Gallery Of Our Being",
  icons: [
    { rel: "icon", url: "https://img.icons8.com/ultraviolet/40/planet.png" },
  ],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 shadow-sm  shadow-slate-400">
      <div className=" w-full ">
        <h1 className="flex items-center gap-2 text-3xl  font-semibold">
          <span className="cursor-pointer">SpaceVerse</span>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/planet.png"
            alt="planet"
          />
        </h1>
      </div>
      <h2 className="cursor-pointer font-semibold">Signin</h2>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
