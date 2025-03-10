import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // Show 1 slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="mt-5">
      <div className="text-xl font-semibold">Discover more</div>

      <Slider {...settings} className="mt-7">
        <div className="px-2">
          {" "}
          {/* Add padding for spacing */}
          <figure
            className="relative w-full h-40 rounded-2xl border-b-6 border-amber-300"
            style={{
              backgroundImage: "url('images/rema.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-center">
              <h1 className="text-md font-bold text-white">Rema Mix</h1>
            </div>
          </figure>
        </div>

        <div className="px-2">
          {" "}
          {/* Add padding for spacing */}
          <figure
            className="relative w-full h-40 rounded-2xl border-b-6 border-amber-300"
            style={{
              backgroundImage: "url('images/rema.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-center">
              <h1 className="text-md font-bold text-white">Rema Mix</h1>
            </div>
          </figure>
        </div>

        <div className="px-2">
          {" "}
          {/* Add padding for spacing */}
          <figure
            className="relative w-full h-40 rounded-2xl border-b-6 border-amber-300"
            style={{
              backgroundImage: "url('images/rema.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-center">
              <h1 className="text-md font-bold text-white">Rema Mix</h1>
            </div>
          </figure>
        </div>
      </Slider>
    </main>
  );
};

export default Discover;
