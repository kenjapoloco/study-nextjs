import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Headline(props) {
  return (
    <div>
          <h1 className={styles.title}>{props.page} page</h1>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>src/pages/{props.page}.js</code>.
            </li>
            {props.code}
          </ol>
          <button onClick={props.onClick}>ボタン</button>
      </div>
  );
}