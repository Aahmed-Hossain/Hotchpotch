import React from "react";
import waverio from "../../public/assests/waverio.png";
import squareStone from "../../public/assests/squareStone.png";
import martino from "../../public/assests/martino.png";
import vitrogen from "../../public/assests/vitrogen.png";
import vertex from "../../public/assests/vertex.png";
import aromix from "../../public/assests/aromix.png";
import fireli from "../../public/assests/fireli.png";
import natroma from "../../public/assests/natroma.png";
import Image from "next/image";

const companyLogos = [
  { id: 1, img: waverio },
  { id: 2, img: squareStone },
  { id: 3, img: martino },
  { id: 4, img: vitrogen },
  { id: 5, img: vertex },
  { id: 6, img: aromix },
  { id: 7, img: fireli },
  { id: 8, img: natroma },
];
const TrustedClients = () => {
  return (
    <div>
      <h4 className="text-center font-medium text-sm md:text-lg mb-8">
        Trusted by nearly 5000+ paying customers
      </h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
        {companyLogos.map((item) => (
          <Image
          className="my-4"
            key={item.id}
            src={item.img}
            alt="trusted company logo"
            height={200}
            width={200}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedClients;
