import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});

export default function Home() {
  const [count,setCount]= useState(1);
  // 配列の分割代入
  // 初期値は１
  const handleClick = (e) => {
    setCount((count) => count + 1);

  };



  useEffect(() => {
  document.body.style.backgroundColor = "lightblue";

  return () => {
    document.body.style.backgroundColor = "";
  };
},[]);

console.log(count);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <div className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Main page="index" />
        <Footer />
      </div>
    </div>
  );
};
