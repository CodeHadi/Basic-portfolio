"use client";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  useEffect(()=>{
    Aos.init({
      easing : "ease-out-back",
      duration : 1000,
      delay : 100,
      mirror : true,
      anchorPlacement : "bottom-bottom",
      offset : 160,
    });
    AOS.refresh();
  },[]);
  return (
    <main>
     <Hero />
     <Project/>
     <Skills/>
     <Contact/>
     <About/>
    </main>
  );
}
