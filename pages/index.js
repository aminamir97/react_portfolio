import Head from "next/head";
import Image from "next/image";
import { FeatureSection } from "../components/feature";
import { FooterSection } from "../components/footer";
import MyHeader from "../components/header";
import { HeaderOver } from "../components/headerOver";
import { TabsSection } from "../components/tabs";
import styles from "../styles/Home.module.css";
import { AboutMe } from "../components/aboutme";
import { Gallery } from "../components/gallery";
import { Button } from "@mui/material";
import { Wssup } from "../components/wssup";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

 
  

  
  return (
    <>
    <Wssup />
      <HeaderOver />
      <MyHeader />
      <AboutMe />
      <TabsSection />
      <FeatureSection />
      <Gallery />
      <FooterSection />
    </>
  );
}
