import Head from "next/head";
import { useEffect } from "react";
import Aboutme from "../components/Aboutme";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Principal from "../components/Principal";
import ReturnUp from "../components/ReturnUp";
import Skills from "../components/Skills";

export default function Home() {
  useEffect(() => {
    const isDark = window.localStorage.getItem("dark");
    if (isDark) document.body.classList.add("dark");
  }, []);
  return (
    <div>
      <Head>
        <title>Fernando Altamirano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rounded logo.ico" />
        <script type="application/ld+json">
          {
            `
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "hola",
    "item": "https://banexcoin.com"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "login",
    "item": "https://banexcoin.com/login"  
  }]
}
            `
          }
        </script>
      </Head>

      <main>
        <Header />
        <Principal />
        <Aboutme />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <ReturnUp />
      </main>
    </div>
  );
}
