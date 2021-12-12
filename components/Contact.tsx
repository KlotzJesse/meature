export const Contact = () => {
  return (
    <section className="relative px-4 pt-16 mx-auto text-gray-600 body-font sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="">
        <div className="flex flex-col w-full mx-auto mt-8 bg-white lg:w-1/3 md:py-8 md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
            Contact
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">Hit us up</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              defaultValue={""}
            />
          </div>
          <button className="px-6 py-2 text-lg bg-indigo-500 border-0 rounded text-meatureWhite focus:outline-none hover:bg-indigo-600">
            Send Message
          </button>
          <p className="mt-3 text-xs text-gray-500">
            By registering, you acknowledge our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
