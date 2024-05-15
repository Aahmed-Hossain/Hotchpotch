import React from "react";
import blogHead from "../../public/assests/blog-heading.png";
import blogIntro from "../../public/assests/blog-intro.png";
import blogOutline from "../../public/assests/blog-outline.png";
import blogRewriter from "../../public/assests/content-rewriter.png";
import Image from "next/image";
import Text from "./shared/Text";

const writingToolsData = [
  {
    id: 1,
    logo: blogHead,
    title: "Blog Headlines",
    des: "Write a better blog title with our A.I tool. with our",
  },
  {
    id: 2,
    logo: blogIntro,
    title: "Blog Intros",
    des: "Generate a paragraph of blog content using Blog Intros tool",
  },
  {
    id: 3,
    logo: blogOutline,
    title: "Blog Outline",
    des: "Need an attention-grabbing headline for your article?",
  },
  {
    id: 4,
    logo: blogHead,
    title: "Blog Conclusions",
    des: "Write a better conclusions with AI writing tool.",
  },
  {
    id: 5,
    logo: blogRewriter,
    title: "Content Rewriter",
    des: "Get AI writer to rewrite your sentence in a different way.",
  },
  {
    id: 6,
    logo: blogIntro,
    title: "Product Description",
    des: "Need an attention-grabbing headline for your article?",
  },
  {
    id: 7,
    logo: blogOutline,
    title: "PAS Copywriting Formula",
    des: "Get AI writer to rewrite your sentence in a different way.",
  },
  {
    id: 8,
    logo: blogHead,
    title: "Company About Us",
    des: "Write a better blog title with our AI with tools .",
  },
];
const WritingTools = () => {
  return (
    <div className="my-32">
<div className="text-center">
<Text  text={'54 exciting writing tools'}/>
<p className="text-sm text-gray-400 my-8">AI engines take information from various sources and read <br /> them like a human would do.</p>
    </div>
        <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-4 px-8 my-16">
        {writingToolsData.map((item) => (
        <div className="bg-[#282A37] rounded-xl shadow-lg py-8 px-3 flex  justify-center gap-2" key={item.id}>
          <Image className="w-[2rem] h-[2rem] mt-1   " src={item.logo} alt="logo" />
          <div>
            <h1 className="font-semibold text-lg">{item.title}</h1>
            <p className="text-sm text-gray-400">{item.des}</p>
          </div>
        </div>
      ))}
        </div>

    </div>
  );
};

export default WritingTools;
