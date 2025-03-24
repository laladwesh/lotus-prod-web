// pages/_app.js
import "../styles/globals.css";
import { Archivo, Inter } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${archivo.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
