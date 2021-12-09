import Card from "./Card";

export const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around px-20">
      <Card title='test' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='https://picsum.photos/200/300' href='#' />
      <Card title='test' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='https://picsum.photos/200/300' href='#' />
      <Card title='test' paragraph='You can now listen to millions of songs, audiobooks ands podcasts on any device anywhere you like!' image='https://picsum.photos/200/300' href='#' />
    </div>
  );
};
export default Feature;
