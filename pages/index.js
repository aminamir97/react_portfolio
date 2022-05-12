import Head from "next/head";
import Image from "next/image";
import { FeatureSection } from "../components/feature";
import { FooterSection } from "../components/footer";
import { TabsSection } from "../components/tabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <TabsSection />
      <FeatureSection />
      <FooterSection />
    </>
  );
}
