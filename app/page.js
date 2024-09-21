'use client'
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { DATA } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data,setData] = useState(DATA)
  return (
    <div>
      <div id="top-bg-cover-img" className="opacity-[0.7] p-[12em] md:p-[18em]"/>
      <div className="max-w-[1024px] mx-auto">
      <Navbar DATA ={data} />
        <Hero DATA ={data}/>
        <Projects DATA ={data}/>
        <Experience DATA ={data}/>
        <Skills DATA ={data}/>
        <Contact DATA ={data}/>
        <Footer DATA ={data}/>
      </div>
    </div>
  );
}


