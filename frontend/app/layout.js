import Header from "@/_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import ReduxProvider from "../providers/ReduxProvider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

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
        <ReduxProvider>
          <Header />
          <div className="flex-1 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
