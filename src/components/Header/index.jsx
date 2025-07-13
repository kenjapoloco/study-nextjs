import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import classes from "src/components/Header/Header.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Header() {
  return (
        <header className={classes.header}>
         <Link href="/" className={classes.anchor}>Index</Link> 
         <Link href="/about" className={classes.anchor}>About</Link>
        </header>
  );
}