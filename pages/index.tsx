import Feature from "@components/Feature";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Hero from "@components/Hero";
import WhySection from "@components/WhySection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
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
