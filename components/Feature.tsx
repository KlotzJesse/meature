import Card from "./Card";

export const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around px-20 my-40">
      <Card title='Lab' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='/lab.svg' href='#' />
      <Card title='Soy' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='/soy.svg' href='#' />
      <Card title='Insects' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='/insects.svg' href='#' />
    </div>
  );
};
export default Feature;
