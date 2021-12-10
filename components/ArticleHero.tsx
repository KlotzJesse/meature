import React from "react";

interface ArticleHeroProps {
  title: string;
  category: string;
  image: string;
  author: string;
}

export const ArticleHero = ({
  title,
  category,
  image,
  author,
}: ArticleHeroProps) => {
  return (
    <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
      <img
        src={image}
        className="object-cover w-full h-64 bg-center rounded-lg"
        alt={"Hero of " + title}
      />
      <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
        {category}
      </p>
      <h1
        className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
        itemProp="headline"
        title={title}
      >
        {title}
      </h1>

      <a className="flex items-center text-gray-700" href="#">
        <div>
          <img
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt={"Photo of " + author}
            className="object-cover w-8 h-8 rounded-full"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">Dez 12 2021</p>
        </div>
      </a>
    </div>
  );
};

export default ArticleHero;
