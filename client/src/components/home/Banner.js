import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const bannerSliderImages = [
    "https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-bloom-blossom-flora-65219-image.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg",
  ];

  // custom button
  function SimpleArrowButton({ onClick, content, position }) {
    return (
      <button
        onClick={onClick}
        className={`btn btn-sm btn-circle absolute bottom-2 ${
          position === "left" && "right-12"
        } ${position === "right" && "right-2"} z-10 shadow btn-primary`}
      >
        {content}
      </button>
    );
  }

  // custom prev arrow
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <SimpleArrowButton
        onClick={onClick}
        position={"left"}
        content={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
    );
  }

  // custom next arrow
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <SimpleArrowButton
        onClick={onClick}
        position={"right"}
        content={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div className="relative">
          <Slider {...settings}>
            {bannerSliderImages.map((bannerSliderImage, index) => (
              <img
                key={index}
                src={bannerSliderImage}
                alt={`slider${index + 1}`}
                className="w-[920px] h-[428px] object-cover object-top"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Banner;

/**
 * banner content properties
 * height: 428 px
 * width: 920 px
 */
