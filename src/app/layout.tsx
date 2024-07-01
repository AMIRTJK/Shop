import Footer from "@/components/Footer";
import "./App.css";
import NavMenu from "@/components/NavMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="px-[120px] py-[36px]">
          <NavMenu />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
