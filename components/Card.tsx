/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

type Card = {
  title: string,
  paragraph: string
  image: string
  href: string
}

export const Card = ({ title, paragraph, image, href }: Card) => {
  return (
    <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm relative">
      <div className="w-full absolute top-20 left-1/2 -translate-x-1/2">
        <img
            src={image}
            alt=""
            className='w-full absolute bottom-0'
        />
      </div>
      <div className="bg-white shadow-md rounded-b-3xl pt-20 pb-6">
        <h2 className="text-center text-secondaryText text-2xl font-bold pt-6">{title}</h2>
        <div className="w-5/6 m-auto">
          <p className="text-center text-primaryText pt-5">{paragraph}</p>
        </div>
        <div className="bg-primary w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-secondary rounded-2xl text-primaryText text-center shadow-md shadow-bg-blue-700">
          <a href={href} className="lg:text-sm text-lg font-bold">Learn more</a>
        </div>
      </div>
    </div>
  );
};
export default Card;
