/* eslint-disable @next/next/no-img-element */

type Card = {
  title: string;
  paragraph: string;
  image: string;
  href: string;
};

export const Card = ({ title, paragraph, image, href }: Card) => {
  return (
    <div className="relative max-w-sm m-auto mt-52 first:mt-0 first:lg:mt-16 w-80 lg:mt-16">
      <div className="absolute w-full -translate-x-1/2 top-20 left-1/2">
        <img src={image} alt="" className="absolute bottom-0 w-full" />
      </div>
      <div className="pt-20 pb-6 bg-white shadow-md rounded-b-3xl">
        <h2 className="pt-6 text-2xl font-bold text-center text-secondaryText">
          {title}
        </h2>
        <div className="w-5/6 m-auto">
          <p className="pt-5 text-center text-primaryText">{paragraph}</p>
        </div>
        <div className="p-2 m-auto mt-6 text-center transition-all duration-300 ease-in-out shadow-md bg-primary w-72 lg:w-5/6 hover:bg-secondary rounded-2xl text-primaryText shadow-bg-blue-700">
          <a href={href} className="text-lg font-bold lg:text-sm">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
