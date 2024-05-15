import React from "react";
interface TextProps {
  text: string | React.ReactNode;
}
const Text: React.FC<TextProps> = ({ text }) => {
  if (typeof text === "string") {
    return (
      <div
        className="font-semibold text-2xl md:text-4xl"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  } else {
    return <div className="font-semibold text-2xl md:text-4xl">{text}</div>;
  }
};

export default Text;
