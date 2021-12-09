export const ContentLeft = () => {
  return (
    <div className="relative flex flex-col py-16 lg:py-0 lg:flex-row">
      <div className="w-full mb-6 lg:mb-0 lg:w-1/2 lg:max-w-full xl:px-0">
        <img
          className="object-cover w-full h-56 rounded  lg:rounded-none md:h-96 lg:h-full"
          src=""
          alt=""
        />
      </div>
      <div className="flex-grow px-6 md:px-0 lg:px-6 lg:pt-20">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Why are we
            <br className="hidden md:block" />
            doing This?
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentLeft;
