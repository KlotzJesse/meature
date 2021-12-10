export const ContentLeft = () => {
  return (
    <div className="relative flex flex-col py-0 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="w-full absolute -z-0 -bottom-80 left-1/2 -translate-x-1/2">
        <img
            src="/why.svg"
            alt=""
            className='w-full'
        />
      </div>
      <div className="relative flex flex-col items-center text-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-11 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primaryText sm:text-4xl sm:leading-none md:text-center">
            Why are we
            <br className="hidden md:block" />
            doing This?
          </h2>
          <p className="mb-5 text-base text-secondaryText md:text-lg md:text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="mb-0 text-center md:mb-16 lg:mb-20">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-secondary hover:bg-primary focus:shadow-outline focus:outline-none"
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
