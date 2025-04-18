
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from "react";

interface Testimonial {
  image: string;
  avatar: string;
  name: string;
  title: string;
  quote: string;
}

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const testimonials: Testimonial[] = [
    {
      image: "img/Rectangle 17.png",
      avatar: "img/person 5.png",
      name: "Edward Newgate",
      title: "Founder Circle",
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.",
    },
    {
      image: "img/Rectangle 17.png",
      avatar: "img/person 6.png",
      name: "Jane Doe",
      title: "CEO, HealthcareX",
      quote:
        "I love how easy it is to use this platform. It saves us so much time and improves our service to patients.",
    },
    {
      image: "img/Rectangle 17.png",
      avatar: "img/person 7.png",
      name: "John Smith",
      title: "CTO, Wellness Inc.",
      quote: "A game-changer in digital health. Secure, fast, and intuitive.",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // We'll control arrows manually
  };

  return (
    <div
      className="flex flex-col items-center w-full md:w-1/2 py-10 rounded-lg relative ml-4 md:ml-100"
      style={{ background: "linear-gradient(to right, #67C3F3, #5A98F2)" }}
    >
      {/* Decorative Images */}
      <div className="absolute left-[-30px] opacity-100 mt-[245px] z-[-1] ml-2">
        <img src="img/Group 5.png" alt="Decoration" className="w-20 h-20 object-contain" />
      </div>
      <div className="absolute left-[-30px] opacity-200 mt-[-43px] ml-[750px] z-10 w-30">
        <img src="img/Group 5.png" alt="Decoration" className="w-20 h-20 object-contain ml-5" />
      </div>

      {/* Section Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-2xl font-semibold mb-6 text-center">
        What our customers are saying
      </h1>

      {/* Slider */}
      <div className="relative w-full px-4">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center ml-85">
              <img
                src={t.image}
                alt="Customer testimonial rectangle underline"
                className="mb-6 w-4/5 sm:w-3/4 md:w-auto"
              />
              <div className="flex flex-col sm:flex-row items-start justify-between w-full px-6 md:px-10 mt-6 space-y-4 sm:space-y-0 sm:space-x-6 ml-[-350px]">
                <div className="flex items-center space-x-4 mt-8 ml-5">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h1 className="text-white font-semibold">{t.name}</h1>
                    <p className="text-white text-sm">{t.title}</p>
                  </div>
                </div>
                <div className="max-w-md text-white text-sm leading-relaxed p-10 mr-[-15px]">
                  <p className="font-mulish font-light leading-[30px] whitespace-pre-line">
                    {t.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Arrows for desktop (side) */}
      <div className="hidden sm:block">
        <div
          className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaArrowLeft className="text-blue-500 text-xl" />
        </div>
        <div
          className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaArrowRight className="text-blue-500 text-xl" />
        </div>
      </div>

      {/* Arrows for mobile (below) */}
      <div className="sm:hidden flex justify-center gap-6 mt-6">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowLeft className="text-blue-500 text-xl" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowRight className="text-blue-500 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;




