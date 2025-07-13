import { Geist, Geist_Mono } from "next/font/google";
import classes from "./Main.module.css";
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
        <main className={classes.main}>
          <Headline page={props.page} code={<li>Save and see your changes instantly.</li>} onClick={() => alert("クリック！")}/>
          <Links />
        </main>
  );
}