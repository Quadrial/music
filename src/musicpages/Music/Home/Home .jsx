import { IoIosNotifications } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from "./components/Discover";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <>
      <section className="px-5 mt-10 text-white">
        <main className="flex justify-between ">
          <button className="border p-1 rounded-md">Connect Wallet</button>
          <IoIosNotifications className="w-10 h-10" />
        </main>

        <main className="mt-10">
          <div className="text-xl font-semibold">Kickstart Your Journey</div>

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

        {/* Discover */}
        <Discover />
        <Discover />
      </section>
    </>
  );
};

export default Home;
