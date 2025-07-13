import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect } from "react";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});

const handleClick = (e) => {
  console.log(e.target.href);
  e.preventDefault();
};


export default function Home() {
useEffect(() => {
  console.log("マウント時に実行される");
  document.body.style.backgroundColor = "lightblue";

  return () => {
    console.log("アンマウント時に実行される");
    document.body.style.backgroundColor = "";
  };
},[]);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
      <a href="/about" /*onClick={handleClick}*/ >
      ボタンをクリックしてAboutページへ移動
      </a>
        <Main page="index" />
        <Footer />
      </div>
    </div>
  );
}
