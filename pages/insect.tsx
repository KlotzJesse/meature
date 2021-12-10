import ArticleHero from "@components/ArticleHero";
import Footer from "@components/Footer";
import Header from "@components/Header";

interface insectProps {}

export const insect = (props: insectProps) => {
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
            title="Insects as a meat substitute"
            category="Insect"
            image="https://www.viridisholdings.com.sg/img/containers/assets/images/recipes/IMG_8544.JPG/41a5528a3073d138396ab92538cf2f6f.JPG"
            author="Thure Wiegel"
          />
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
            <p>
              Have you ever been bothered by pesky insects like flys, mosquitos
              and worms in your flour? These pests will live off basically
              nothing and reproduce at an alarming rate. In the western parts of
              the world these insects are mostly regarded as a nuisance and
              their true value is often overlooked. In reality, some of these
              insects, mostly worms and larvae, are wonderful as food and
              especially as a source of protein and could be a viable
              replacement of meat. What us people in the west often overlook is
              that eating insects is already established in many parts of the
              world. Some sources estimate world population that eats certain
              beetles and even moths at 20% to 30%! Most of these people live in
              South-east-asia or Southern-america, where due to the environment
              large kettle farming is not viable. Insects are chosen as a food
              source because they are rich in nutrients compared to the same
              amount of for example meats and as mentioned before require very
              little space and resources to cultivate in large quanitities. In
              the west, insects as a meat substitute face difficulties
              especially linked to most people no liking the idea of eating
              dirty insects and thinking of them just as "critters". To increase
              consumer interest in the west, insects are often processed into
              e.g. flour, chips and flavoured snacks. Potential challenges with
              using insects as food are for of course the sigmata around them
              but also the potential spread of viruses and diseases, even in
              processed form.
            </p>
            <h2>Herbal products as meat substitute</h2>
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
              numbers. They also don't produce any methane gas and clean our air
              of carbon monoxide. Potential challengesthat come with using
              vegetables and fruits on a large scale to replace meat are for one
              the required space and especially the high water usage. This, as
              well as factors such as farming season limit the large-scale
              cultivation of plants in poorer regions and places located in the
              desert. The use of high tech farming and irrigation technology
              would be a way to solve these problems.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default insect;
