import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";

interface contactProps {}

export const contact = (props: contactProps) => {
  return (
    <div>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default contact;
