export const ContentLeft = () => {
  return (
    <div className="relative flex flex-col py-0 lg:pt-0 lg:flex-col lg:pb-0 bg-primary">
      <img src="/why.svg" alt="" className="w-full bg-meatureWhite" />
      <div className="flex flex-col items-center w-full max-w-xl px-4 mx-auto text-center md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-11 lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primaryText sm:text-4xl sm:leading-none md:text-center">
            Why are we
            <br className="hidden md:block" /> doing This?
          </h2>
          <p className="mb-5 text-base text-secondaryText md:text-lg md:text-center">
            Nowadays, meat consumption is at an all-time high. To cope with this
            demand, meat production was industrialized. Nowadays, most animals
            meant for consumption are fed with antibiotics and medicine, have
            very little to no space to live and move and are even genetically
            modified to grow faster and produce more meat. This leads to a
            degradation of meat quality and can have negative impacts on the
            health of the consumer. Another factor is the environmental impact
            of meat production for example almost 22.000 litres of water are
            needed to produce 1kg of beef. We think that there are more
            sustainable ways of stilling the worlds hunger for meat for example
            using alternatives like insects or even growing the meat in a
            laboratory.
          </p>
          <div className="mb-0 text-center md:mb-16 lg:mb-20">
            <a
              href="/why"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-300 ease-in-out rounded shadow-md md:w-auto bg-secondary hover:bg-secondary/70 focus:shadow-outline focus:outline-none"
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
