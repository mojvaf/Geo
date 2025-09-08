import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "Birds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-700 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer> Copyright by The Company</footer>
      </body>
    </html>
  );
}
