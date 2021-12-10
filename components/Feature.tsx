import { Card } from "./Card";
export const Feature = () => {
  return (
    <div className="relative flex flex-col justify-around px-4 pt-16 mx-auto my-20 text-gray-600 md:flex-row body-font sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Card
        title="Lab"
        paragraph="You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!"
        image="/lab.svg"
        href="/lab"
      />
      <Card
        title="Soy"
        paragraph="You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!"
        image="/soy.svg"
        href="/industry"
      />
      <Card
        title="Insects"
        paragraph="You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!"
        image="/insects.svg"
        href="/insects"
      />
    </div>
  );
};
export default Feature;
