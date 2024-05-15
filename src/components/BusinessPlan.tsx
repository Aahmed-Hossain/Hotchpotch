import React from "react";
import Text from "./shared/Text";

const plans = [
  {
    title: "Starter Plan",
    price: "$29",
    priceInfo: "This package is suitable for teams 1-15 people.",
    descriptionHead: "What’s included:",
    descriptionDetails: [
      "10 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "1 Year Support ",
    ],
  },
  {
    title: "Basic Plan",
    price: "$79",
    priceInfo: "This package is suitable for teams 1-50 people.",
    descriptionHead: "What’s included:",
    descriptionDetails: [
      "15 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "5 Year Support ",
      "Free Custom Domain",
      "Basic Statistics",
    ],
  },

  {
    title: "Premium Plan",
    price: "$129",
    priceInfo: "This package is suitable for teams 1-100 people.",
    descriptionHead: "What’s included:",
    descriptionDetails: [
      "20 GB Dedicated Hosting Free",
      "Best for Developers, Freelancers",
      "Unlimited SupportFree Custom Domain",
      "Full Statistics",
    ],
  },
];
const BusinessPlan = () => {
  return (
    <div className="mb-28">
      <div className="text-center">
        <Text text={"Make the wise decision <br/> for your business "} />
        <p className="text-sm text-gray-400 my-8">
          Choose from our affordable 3 packages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-12 h-[32rem]">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#282A37] rounded-xl shadow-lg px-12 py-6 space-y-4 flex flex-col justify-between"
          >
           <div>
           <p className="">{plan.title}</p>
            <p className="my-6">
              <span className="text-5xl font-semibold">{plan.price}</span>/month
            </p>
            <p className="text-gray-400 my-4">
                {plan.priceInfo}
            </p>
            <p className="text-lg font-medium my-6 ">{plan.descriptionHead}</p>
            <div className="space-y-4">
              {plan?.descriptionDetails.map((item, id) => (
                <p key={id} className="text-gray-400 font-medium">
                  {item}
                </p>
              ))}
            </div>
           </div>

            <div className=" flex  justify-center mx-auto">
              <button className={`${idx===1 ? 'bg-gradient-to-r from-[#3157FF] to-[#B22DFE] w-[13rem] p-2 rounded-lg text-center' :'w-[13rem] p-2 rounded-lg text-center  border border-gray-500 '}`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPlan;
