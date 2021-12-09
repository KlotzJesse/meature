import Image from 'next/image'

type Card = {
  title: string,
  paragraph: string
  image: string
  href: string
}

export const Card = ({ title, paragraph, image, href }: Card) => {
  return (
    <div className="h-screen">
      <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
        <Image
          src={image}
          alt=""
          width='400%'
          height='250%'
          className='rounded-t-2xl shadow-md lg:w-full 2xl:w-full 2xl:h-44 object-cover'
        />
        <div className="bg-white shadow-md rounded-b-3xl pb-6">
          <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">{title}</h2>
          <div className="w-5/6 m-auto">
            <p className="text-center text-gray-500 pt-5">{paragraph}</p>
          </div>
          <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-md shadow-bg-blue-700">
            <a href={href} className="lg:text-sm text-lg font-bold">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
