export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 pt-16 mx-auto mb-56 lg:pt-0 lg:flex-col lg:pb-0 mt-14 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-1 ">
      <div className="absolute w-2/3 -translate-x-1/2 -translate-y-1/2 -z-0 top-1/2 left-1/2">
        <img src="/hero.svg" alt="" className="w-full" />
      </div>
      <div className="relative flex flex-col items-center w-full max-w-xl px-4 mx-auto text-center md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h1 className="mb-5 font-sans text-5xl font-bold tracking-tight text-meatureWhite sm:text-5xl sm:leading-none">
            Meature
            <br className="hidden md:block" />
            The future{" "}
            <span className="inline-block text-secondary">of Meat</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
