export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-hero-pattern bg-cover">
      <div className="relative flex flex-col items-center text-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h1 className="mb-5 font-sans text-5xl font-bold tracking-tight text-primaryText sm:text-5xl sm:leading-none">
            Meature
            <br className="hidden md:block" />
            The future{" "}
            <span className="inline-block text-primary">
              of Meat
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;