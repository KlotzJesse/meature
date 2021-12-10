import Feature from "@components/Feature";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import WhySection from "@components/WhySection";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meature</title>
        <meta name="description" content="The future of Meat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Feature />
        <WhySection />
      </main>

      <Footer index />
    </div>
  );
};

export default Home;
