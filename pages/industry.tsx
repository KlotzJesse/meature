import ArticleHero from "@components/ArticleHero";
import Footer from "@components/Footer";
import Header from "@components/Header";

interface industryProps {}

export const Industry = (props: industryProps) => {
  return (
    <div>
      <Header />
      <main>
        <article
          className="px-4 mx-auto py-11 max-w-7xl"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <ArticleHero
            title="Meat Industry in numbers"
            category="Industry"
            image="http://modernfarmer.com/wp-content/uploads/2013/07/cattle-feed-lot-hero.jpg"
            author="Bela Bondar"
          />
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
            <p>
              The meat industry has drastically changed in the past decades.
              Since 1961 the meat production has almost quadrupled globally
              whereas the global population has roughly doubled since then. This
              massive increase in production demand led to many choices that
              allowed for more productivity at the cost of many other important
              things. We are not here to call the meat industry “inhumane” or
              “evil”, but we want to discover the impact it has on today’s
              environment and eco systems.
            </p>
            <p>
              A pressing issue we will face in the feature and which some
              regions of the world already struggle with today is fresh water
              supply. Depending on where someone lives fresh water is either
              something that comes rather cheat out of your sink, or it is a
              luxury your live depends on. In contrast the meat industry is
              responsible for roughly 20-33 percent of all fresher consumption
              worldwide. A big factor in this consumption is the water cost of
              cows. Almost 22.000 litres of water are needed to produce 1kg of
              beef. Furthermore, the area that is needed to produce 125kg of
              beef would instead yield an astonishing 25.000 kg of potatoes or
              tomatoes, a rather crass contrast, isn’t it?
            </p>
            <p>
              When talking about sustainability and climate change, we don’t get
              around talking about the impact of animal agriculture. It alone is
              responsible for around 18% of global climate change, more than all
              forms of transportation combined. Cows produce almost 700 billion
              litres of methane every day, which is 25-100 times more
              destructive than C02. Additionally, around 91% of the destruction
              of the amazon rain forest happens so humanity can produce more
              meat. Around 1 to 2 acres of rainforest are cleared every single
              second to make space for livestock and produce more meat.
            </p>
            <h2>What can you do? </h2>
            <p>
              Usually, the supply is somewhat determined by the demand but
              somehow it seems like the meat industry is an exception to that
              rule. Theres just more and more meat being produced animals filled
              with antidepressants and antibiotics to the rim, never see the sun
              and are genetically modified so that some of them can’t even walk
              anymore. It is not necessary to completely do without meat, after
              all it is delicious. But there are alternatives to the cheap meat
              you can find at any supermarket. Locally produced meat from
              organic productions locally which don’t deforest the amazon
              rainforest, which don’t pump their animals full of antidepressants
              and which animals also get to see the sun sometimes. Sure, this is
              more expensive but if you think about what has happened to make
              500g of beef, fly it to you from oversees and sell it for less
              than 5 Euro, it sure seems questionable.{" "}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
