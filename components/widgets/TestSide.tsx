import React from "react";

function TestSide() {
  return (
    <div className="scale-90">
      <div className="flex flex-wrap w-full h-screen">
        <div className="xs:w-3/12 xs:h-128 w-3/12 visible xm:invisible bg-gradient-to-tr rounded-3xl from-black  via-gray-900 to-black p-3 shadow-lg ">
          <div className="h-screen sticky top-0">
            <div className="flex space-x-4 p-2 mt-4 mb-8 justify-center ">
              <img
                className="h-20 align-middle"
                src="src/assets/fx-culture.png"
                alt="James Bhatta"
              />
            </div>
            <div className="mr-32">
              <div className="flex justify-center mr-16">
                <img className="h-12 align-middle rounded-full" src="src/assets/logo1.png" />
              </div>
              <ul className="space-y-10 text-sm">
                <li>
                  <a className="flex items-center mr-16 space-x-3 justify-center text-gray-500 text-xl p-2 font-medium">
                    <span>Hello</span>
                  </a>
                  <a className="flex items-center ml-5 mb-20 space-x-3 justify-center text-white text-xl p-2 font-medium">
                    <span>Kristian Kotlar</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-3 justify-center text-gray-500 transition ease-in-out delay-50 text-2xl p-2 font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>My profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center ml-10 space-x-3 justify-center text-gray-500 transition ease-in-out delay-50 p-2 text-2xl font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>Subscriptions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-3 justify-center text-white transition ease-in-out delay-50 p-2 text-2xl font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>Academy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-3 justify-center text-gray-500 transition ease-in-out delay-50 p-2 text-2xl font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center mt-32 space-x-3 justify-center text-gray-500 transition ease-in-out delay-50 p-2 text-2xl font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center space-x-3 justify-center text-gray-500 transition ease-in-out delay-50 p-2 text-2xl font-medium hover:text-white focus:shadow-outline"
                  >
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xs:w-8/12 w-8/12 xs:ml-20 xm:12/12 bg-white rounded-3xl">
          <div className="grid place-items-center min-h-screen">
            <div className="p-4 justify-items-center xs:justify-items-start max-w-5xl grid gap-x-24 gap-y-8  xs:gap-y-12 xs:gap-x-128 xs:grid-cols-3 xs:p-1 ">
              <h1 className="text-4xl font-extrathick xs:col-span-3 xs:grid xs:gap-4 xs:grid-cols-3">
                Webinars
              </h1>
              <div className="h-64 w-64 bg-gray-100 xs:h-auto xs:square rounded-xl">
                <img src="src/assets/logo.png" className="mx-auto" />
                <h1 className="text-3xl font-extralight text-gray-500 text-center">
                  <span className="">Beginners</span>
                </h1>
              </div>
              <div className="h-64 w-64 bg-gray-100 xs:h-auto xs:square rounded-xl">
                <img src="src/assets/logo.png" className="mx-auto" />
                <h1 className="text-3xl font-extralight text-gray-500 text-center">
                  <span className="">Advanced</span>
                </h1>
              </div>
              <div className="h-64 w-64 bg-gray-100 xs:h-auto xs:square rounded-xl">
                <img src="src/assets/logo.png" className="mx-auto" />
                <h1 className="text-3xl font-extralight text-gray-500 text-center">
                  <span className="">Professional</span>
                </h1>
              </div>
              <h1 className="text-4xl font-extrathick xs:col-span-3 xs:grid xs:gap-4 xs:grid-cols-3">
                Academy
              </h1>
              <div className="h-96 w-256  overflow-auto inline-block ">
                <table className="min-w-full">
                  <tbody>
                    <tr className="bg-gray-200">
                      <td className="p-3 px-6 py-4 text-gray-700">asdasdasdasdasd</td>
                      <td className="px-6 text-gray-700">1:27:21</td>
                    </tr>
                    <tr className="pt-8">
                      <td className="px-6 py-4 text-gray-700">asdasdasdasdasdsssssssssssss</td>
                      <td className="px-6 text-gray-700">0:19:21</td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="p-3 px-6 py-4 text-gray-700">asdasdasdasdasd</td>
                      <td className="px-6 text-gray-700">0:20:21</td>
                    </tr>
                    <tr className="pt-8">
                      <td className="px-6 py-4 text-gray-700">asdasdasdasdasdsssssssssssss</td>
                      <td className="px-6 text-gray-700">1:13:37</td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="p-3 px-6 py-4 text-gray-700">asdasdasdasdasd</td>
                      <td className="px-6 text-gray-700">0:55:01</td>
                    </tr>
                    <tr className="pt-8">
                      <td className="px-6 py-4 text-gray-700">asdasdasdasdasdsssssssssssss</td>
                      <td className="px-6 text-gray-700">1:13:37</td>
                    </tr>

                    <tr className="bg-gray-200">
                      <td className="p-3 px-6 py-4 text-gray-700">asdasdasdasdasd</td>
                      <td className="px-6 text-gray-700">0:55:01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="h-96 w-256 xs:ml-36 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSide;
