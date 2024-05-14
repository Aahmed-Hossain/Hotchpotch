/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ButtonContained from "./ButtonContained";
import Image from "next/image";
import frame from "../../public/assests/Frame.png";
const CreateContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 xl:gap-20 mt-32 mb-8 px-6 md:px-12 ">
      {/* left container */}
      <div className="w-full md:w-1/2 h-full flex flex-col md:flex-row  ">
        <div className="w-[25rem] flex flex-col gap-3 bg-white shadow-lg hover:shadow-2xl rounded-lg text-black px-12 py-4 relative">
          <div>
            <h3 className="font-bold ">Results</h3>
            <p className="text-sm text-gray-500 mt-2">
              Here's what our AI came up with.
            </p>
          </div>

          <p>
            Pain: You are an e-commerce business, and you want to sell your
            products all over the country, but you are confused about how to
            handle sales tax.
          </p>
          <p>
            Solution: Use TaxSol, our full stack sales tax solution, to manage
            your sales tax for you!
          </p>

          <p>
            Pain: e-commerce business owners are struggling to keep up with the
            ever changing sales tax laws.
          </p>

          <p>Agitate: Sales tax is a complicated, confusing</p>
        </div>

        <Image
          className="absolute ml-[17rem] mt-[15rem]"
          src={frame}
          alt="frame"
        />
      </div>

      {/* right container or text container */}
      <div className="w-full md:w-1/2 h-full flex flex-col my-auto gap-8">
        <h1 className="font-semibold text-2xl md:text-4xl ">
          Create content efficiently <br /> and quickly with great AI <br />{" "}
          writing tools
        </h1>
        <p className="text-gray-400 text-sm">
          150k+ users. No Credit Card Required. Pro designs and <br /> writing
          at no cost. Start for free. Ai Writer Tool | Generate <br /> text for
          ecom, social media, website, sales, blogs etc.
        </p>
        <div>
          <ButtonContained>{"Start 14 Days Free Trial"}</ButtonContained>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
