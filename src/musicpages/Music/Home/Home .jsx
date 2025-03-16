import { IoIosNotifications } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from "./components/Discover";
import ConnectWalletButton from "../../../components/ConnectWalletButton";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for mobile
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and desktop
        settings: {
          slidesToShow: 3, // Show 4 slides on tablet/desktop
        },
      },
      {
        breakpoint: 768, // Smaller tablets
        settings: {
          slidesToShow: 3, // Show 3 slides on smaller tablets
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2, // Show 2 slides on mobile
        },
      },
    ],
  };

  // Array of slider items with images and titles
  const sliderItems = [
    {
      image: "images/rema.png",
      title: "Rema Mix",
    },
    {
      image: "images/davido.png", // Replace with Davido's image path
      title: "Davido Mix",
    },
    {
      image: "images/wiz.png", // Replace with Wizkid's image path
      title: "Wizkid Mix",
    },
    {
      image: "images/rema.png",
      title: "Rema Mix",
    },
    {
      image: "images/davido.png", // Replace with Davido's image path
      title: "Davido Mix",
    },
    {
      image: "images/wiz.png", // Replace with Wizkid's image path
      title: "Wizkid Mix",
    },
  ];

  return (
    <section className="lg:px-20 md:px-20 px-5 mt-10 md:mt-20 lg:mt-20  text-white mb-40">
      {/* Header Section */}
      <main className="flex justify-between">
        <ConnectWalletButton />
        <IoIosNotifications className="w-10 h-10" />
      </main>

      <button className="mt-5 border p-2 rounded-md">Subscribe</button>

      {/* Slider Section */}
      <main className="mt-10">
        <div className="text-xl font-semibold">Kickstart Your Journey</div>
        <Slider {...settings} className="mt-7">
          {sliderItems.map((item, index) => (
            <div key={index} className="px-2">
              <figure
                className="relative w-full h-40 md:h-50 lg:h-70 rounded-2xl border-b-4 border-amber-300"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-center">
                  <h1 className="text-md font-bold text-white">{item.title}</h1>
                </div>
              </figure>
            </div>
          ))}
        </Slider>
      </main>

      {/* Additional Components */}
      <Discover />
      <Discover />
    </section>
  );
};

export default Home;