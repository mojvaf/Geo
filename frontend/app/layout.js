import Header from "@/_components/Header";
import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

export const metadata = {
  title: {
    template: "%s The Wild Birds",
    default: "Welcome / The wild Birds",
  },
  description: "This is about Eastern and Central North American wild birds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto bg-red-500">{children}</main>
        </div>
      </body>
    </html>
  );
}
