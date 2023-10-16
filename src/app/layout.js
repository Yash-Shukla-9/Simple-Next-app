import Header from "@/components/header/page";
import "./globals.css";
import { Inter } from "next/font/google";
import layoutCss from "./layout.module.css";
import Footer from "@/components/footer/page";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className={layoutCss.Container}>
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
