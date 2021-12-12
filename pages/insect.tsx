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
              dirty insects and thinking of them just as &quot;critters&quot;.
              To increase consumer interest in the west, insects are often
              processed into e.g. flour, chips and flavoured snacks. Potential
              challenges with using insects as food are for of course the
              sigmata around them but also the potential spread of viruses and
              diseases, even in processed form.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default insect;
