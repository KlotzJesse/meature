import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import React from "react";

interface contactProps {}

export const contact = (props: contactProps) => {
  return (
    <div>
      <Head>
        <title>Contact - Meature</title>
        <meta name="description" content="The feature of meat" />
      </Head>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default contact;
