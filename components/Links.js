import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import classes from "./Links.module.css";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },     
]

export function Links() {
  return (
    <div className={`${classes.container} ${geistSans.variable} ${geistMono.variable}`}>
          <h1 className={classes.title}>Welcome to Next.js!</h1>
          <div className={classes.container}>
            {ITEMS.map((item) => {
              return (
                  <a key={item.href} href={item.href} className={classes.card}>
                    <h3 className={classes.title}>◾️{item.title}</h3>
                    <p className={classes.description}>{item.description}</p>
                  </a>
                );
              })}
          </div>
          <div className={classes.ctas}>
              <a className={classes.primary} href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
              <Image className={classes.logo} src="/vercel.svg" alt="Vercel logomark" width={20} height={20}/>
              Deploy now</a>
              <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className={classes.secondary}>
              Read our docs</a>
          </div>
   </div>
  );
}