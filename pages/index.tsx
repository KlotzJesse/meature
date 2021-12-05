import ContentLeft from "@components/ContentLeft";
import Feature from "@components/Feature";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meature</title>
        <meta name="description" content="Beat your Meat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Feature />
        <ContentLeft />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
