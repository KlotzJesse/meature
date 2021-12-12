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
            title="Herbal products as meat substitute"
            category="Meat Substitute"
            image="http://modernfarmer.com/wp-content/uploads/2013/07/cattle-feed-lot-hero.jpg"
            author="Bela Bondar"
          />
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
            <p>
              Herbal products are the most common meat substitute, especially
              because they are also accepted in completely meat free lifestyles
              such as veganism. These meat alternatives come in many forms, such
              as the famous Tofu and Tempeh, various bean products and more
              exoic variations such as algae and special mushrooms. The main
              goal of these ingredients is to replace meat everywhere, even in
              traditionally meat-based recipes. Therefore, they often have a
              meat like consitency and mimic meat in their form. Especially tofu
              is widely used because of its neutral flavour. Using spices, tofu
              based products can almost taste the same as meat. Of course there
              is not just tofu and other soy bean based foods. Different
              cultures all over the world adopted a wide variety of vegetables
              and fruits as important parts of their diet and even to substitute
              meat. These include regular beans, used in the middle east as
              falafel, eggplant based dishes, Jackfruit, Nut roasts and even
              special mushrooms that posess the taste of beef or chicken. What
              makes these ingredients special is that they are often not
              regarded as a vegetable side dish but replace meat at the center
              piece of a recipe. As with Insects, vegetables and fruits often
              require way less space and energy as cattle to grow in large
              numbers. They also don&apos;t produce any methane gas and clean
              our air of carbon monoxide. Potential challengesthat come with
              using vegetables and fruits on a large scale to replace meat are
              for one the required space and especially the high water usage.
              This, as well as factors such as farming season limit the
              large-scale cultivation of plants in poorer regions and places
              located in the desert. The use of high tech farming and irrigation
              technology would be a way to solve these problems.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
