import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL:
              </h2>
              <h1 className="text-indigo-400 leading-relaxed">
                yehndah@gmail.com
              </h1>
             
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE:
              </h2>
              <p className="leading-relaxed text-lg font-semibold text-white mt-2 inline-block whitespace-nowrap">
               254-774-538-624
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
