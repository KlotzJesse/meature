import React from "react";

interface StatisticProps {
  title: string;
  description: string;
  graphic: any;
  right?: boolean;
}

export const Statistic = (props: StatisticProps) => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 pt-16 mx-auto lg:flex-row lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div
        className={`w-full max-w-xl px-4 mx-auto ${
          props.right ? "lg:order-last" : ""
        } md:px-0 lg:px-8 lg:py-20 lg:w-1/2 lg:max-w-screen-xl`}
      >
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
            {props.title}
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg ">
            {props.description}
          </p>
        </div>
      </div>
      <div className="w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full xl:px-0">
        {/* <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={props.graphic}
          alt=""
        /> */}
        {props.graphic}
      </div>
    </div>
  );
};

export default Statistic;
