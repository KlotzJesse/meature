import Footer from "@components/Footer";
import Header from "@components/Header";
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
        <div>
          <p>Hello World</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
