import { ArticleHero } from "@components/ArticleHero";
import Header from "@components/Header";
import Head from "next/head";
import { Footer } from "../components/Footer";

interface labProps {}

export const lab = (props: labProps) => {
  return (
    <div>
      <Head>
        <title>Lab grown Meat - Meature</title>
        <meta name="description" content="The feature of meat" />
      </Head>
      <Header />
      <main>
        <article
          className="px-4 mx-auto py-11 max-w-7xl"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <ArticleHero
            title="When meat doesn’t require killing a single animal."
            category="Lab"
            image="https://brightly.eco/wp-content/uploads/2021/08/lab-grown-meat-sustainability.jpg"
            author="Fabian Mergner"
          />
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
            <p>
              Cultured meat is meat produced by in vitro cell cultures of animal
              cells. Cultured meat is produced by using engineering techniques,
              which are traditionally applied in regenerative medicines.
            </p>
            <p>
              As a first step, in December 2020 Singapore approved the trade of
              chicken grown in bioreactors. The US company Eat Just produces
              them and the chicken passed a safety review by the Singapore Food
              Agency. The meat is grown in a big bioreactor and then combined
              with plant-based ingredients.
            </p>
            <p>
              Josh Tetrick, of Eat Just, said: “I think the approval is one of
              the most significant milestones in the food industry in the last
              handful of decades. It’s an open door and it’s up to us and other
              companies to take that opportunity. My hope is this leads to a
              world in the next handful of years where the majority of meat
              doesn’t require killing a single animal or tearing down a single
              tree.”
              (https://www.theguardian.com/environment/2020/dec/02/no-kill-lab-grown-meat-to-go-on-sale-for-first-time,
              23.11.2021 14:45)
            </p>
            <p>
              Lab-grown meat is a scientific development which is exciting for
              many because of its environmental impact. The ecosystem does not
              get infected due the slaughter of animals. There will be no harm
              to the environment as all of the animals live their normal life
              and do not get harmed. To produce a normal 230g Steak you will
              need 1.6kg of Food for an animal, about 60 charges of a laptop and
              3.515 litres of water. For the cultured meat you need 10 times
              less land, more than 10 times less water and less than half of the
              Energy.
              (https://stories.pinduoduo-global.com/agritech-hub/how-is-cultured-meat-made,
              23.11.2021 14:45){" "}
            </p>
            <p>
              The most important point about Cultured meat is, that there are no
              undesirable side effects, and it will reduce the risk of a
              disease: As the chicken do not get antibiotics there will be no
              risk of food-borne illnesses such as E. coli and salmonella. With
              cultured meat you will cut out the risks associated with these
              microorganisms and antibiotics.{" "}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default lab;
