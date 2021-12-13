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
          title="Water consumption of meat types compared"
          description="Of the three most consumed meats (The most consumed one is Chicken), beef requires by far the most water per kilo to produce. This makes finding better beef alternatives especially important. "
          graphic={<WaterConsumptionStat />}
        />
        <Statistic
          title="CO2 Emissionsfrom meats"
          description="As with water, the meat that produces the most CO2 per kilogram is beef. This because the larger footprint of kettle and combines with their methane output. Nowadays, kettle plays a not insignificant part in global warming. "
          graphic={<MeatEmissionsStat />}
          right
        />
        <Statistic
          title="Consumer acceptance of better meat / alternatives"
          description="Independant studies show: Cultures historically eating meat are still hesitent awhen it comes to meat alternatives. Only 5% for example appprove of lab meat as a viable alternative. It is to note however that roughly 25% of the population would atleast try novel alternatives like invitro meat and insects."
          graphic={<SurveyMeatSubstitutes />}
          right
        />
        <Statistic
          title="Environental impact of meat alternatives"
          description="As you can see, every alternative to beef has a smaller environmental impact. Chicken and Soy based products are especially good, followed by pork."
          graphic={<MeatSubstituteEnvStat />}
        />
      </main>
      <Footer />
    </div>
  );
};

export default statistics;
