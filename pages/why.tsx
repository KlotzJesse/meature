import Footer from "@components/Footer";
import Header from "@components/Header";
import MeatEmissionsStat from "@components/MeatEmissionsStat";
import MeatSubstituteEnvStat from "@components/MeatSubstituteEnvStat";
import Statistic from "@components/Statistic";
import SurveyMeatSubstitutes from "@components/SurveyMeatSubstitutes";
import { WaterConsumptionStat } from "@components/WaterConsumptionStat";
import Head from "next/head";

interface statisticsProps {}

export const statistics = (props: statisticsProps) => {
  return (
    <div>
      <Head>
        <title>Why?- Meature</title>
        <meta name="description" content="The feature of meat" />
      </Head>
      <Header />
      <main>
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic={<WaterConsumptionStat />}
        />
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic={<MeatEmissionsStat />}
          right
        />
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic={<SurveyMeatSubstitutes />}
          right
        />
        <Statistic
          title="The quick, brown fox jumps over a lazy dog"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo."
          graphic={<MeatSubstituteEnvStat />}
        />
      </main>
      <Footer />
    </div>
  );
};

export default statistics;
