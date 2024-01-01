import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings={
    dots:true,
    arrows:false,
    infine:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnhover:true,
    pauseOnFocus:true,
  };
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className=" text-center mb-20 max-w-[400px] mx-auto">
          <h1 className=" text-3xl font-bold dark:text-white">Testimonial</h1>
          <p className=" text-xs text-gray-400">
            Decades of delicious memories, generations served with a smile.
            Renowned for quality, revered for warmth, Food Zone: a table waiting
            for 🍕your story.🍕
          </p>
        </div>
        <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
          <Slider {...settings}>
            {
              testimonialData.map(({id,name,text,img})=>{
                return(
                  <div key={id} className="my-6 mx-auto">
                    <div className=" bg-primary/10 relative p-4 flex justify-center items-center flex-col dark:bg-gray-800 text-center gap-4 shadow-lg mx-4 rounded-xl hover:bg-primary/10">
                      <img src={img} alt="" className="mx-auto block rounded-full" />
                      <h1 className=" text-xl font-bold">{name}</h1>
                      <p className=" text-sm dark:text-white">{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
