import Footer from "@components/Footer";
import Header from "@components/Header";
import Statistic from "@components/Statistic";
import React from "react";

interface statisticsProps {}

export const statistics = (props: statisticsProps) => {
  return (
    <div>
      <Header />
      <main>
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        />
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          right
        />
      </main>
      <Footer />
    </div>
  );
};

export default statistics;
