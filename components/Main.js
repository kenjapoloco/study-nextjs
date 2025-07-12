import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "./Links";
import { Headline } from "./Headline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Main(props) {
  return (
        <main className={styles.main}>
          <Headline page={props.page} code={<li>Save and see your changes instantly.</li>} onClick={() => alert("クリック！")}/>
          <Links />
        </main>
  );
}