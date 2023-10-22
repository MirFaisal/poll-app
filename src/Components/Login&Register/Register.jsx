const Register = () => {
  return (
    <>
      <div className="w-full p-4 bg-white md:border md:border-t-0 border-gray-200 shadow sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="flex items-start">
            <a href="#" className="text-gray-500 hover:underline ">
              Lost Password ?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#D85545] hover:bg-[#D85545]/90 focus:outline-none font-medium rounded text px-5 py-2.5 text-center "
          >
            Sing Up
          </button>
        </form>
        <div className="my-6 text-center">
          <span className="text-gray-500">Or</span>
        </div>
        <div className="mt-6 flex justify-center gap-5">
          <button
            type="button"
            className=" border focus:outline-none font-medium rounded text-sm text-center inline-flex items-center"
          >
            <img src="icons/facebook.svg" alt="" />
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className=" borderfocus:outline-none font-medium rounded text-sm text-center inline-flex items-center"
          >
            <img src="icons/google.svg" alt="" />
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
