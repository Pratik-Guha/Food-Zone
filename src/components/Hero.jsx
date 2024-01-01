import React, { useState } from "react";
import { biryani1, biryani2, biryani3, biryani5, vector } from "../assets";
const ImageList = [
  {
    id: 1,
    imge: biryani1,
  },
  {
    id: 2,
    imge: biryani2,
  },
  {
    id: 3,
    imge: biryani3,
  },
];
const Hero = () => {
  const [imageId, setimageId] = useState(biryani1);

  const bgIamge = {
    backgroundImage: `url(${vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      style={bgIamge}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* {text content section} */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to Food Zone
            </h1>
            <p className=" text-sm">
              Where smiles sizzle and flavors explode. Dig into culinary magic
              crafted with love, served with warmth. Experience the tastiest
              journey, guided by friendly faces and genuine care. Come hungry,
              leave happy, at Food Zone!🍖
            </p>
            <div>
              <button className="btn">Order Now</button>
            </div>
          </div>
          {/* {image section } */}
          <div className="flex justify-center items-center order-1 sm:order-2 min-h-[450px] relative">
            <div className="flex justify-center items-center h-[300px]  sm:h-[450px] overflow-hidden">
              <img
                src={imageId}
                className=" w-[300px] align-middlew-[450px] mx-auto spin"
                alt=""
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ImageList.map((item) => (
                <img
                 key={item.id}
                  src={item.imge}
                  onClick={() => {
                    setimageId(
                      item.id === 1
                        ? biryani1
                        : item.id === 2
                        ? biryani2
                        : biryani3
                    );
                  }}
                  alt="biryani_img"
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
