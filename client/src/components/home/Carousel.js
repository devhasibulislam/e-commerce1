import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import CategoryCard from "./CategoryCard";
import ArrivalsCard from "./ArrivalsCard";

const Carousel = ({ visibility, cards, view }) => {
  /* revealing slider with respect to products */
  // custom button
  function SimpleArrowButton({ onClick, content, position }) {
    return (
      <button
        onClick={onClick}
        className={`btn btn-sm btn-circle absolute top-2 ${
          position === "left" && "right-12"
        } ${
          position === "right" && "right-2"
        } z-10 btn-secondary text-white shadow-2xl`}
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

  /* slider configuration */
  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: visibility,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    lazyLoad: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: visibility === 3 ? 2 : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      {/* category contents */}
      <Slider {...settings}>
        {/* display products */}
        {view === "products" &&
          cards?.map((card) => <ProductCard key={card.id} product={card} />)}

        {/* display categories */}
        {view === "categories" &&
          cards?.map((card) => <CategoryCard key={card.id} category={card} />)}

        {/* display new arrivals */}
        {view === "newArrival" &&
          cards?.map((card) => <ArrivalsCard key={card.id} product={card} reduction={false} />)}

        {/* display big discounts */}
        {view === "bigDiscount" &&
          cards?.map((card) => <ArrivalsCard key={card.id} product={card} reduction={true} />)}
      </Slider>
    </section>
  );
};

export default Carousel;

/**
 * Gap between cards in slider
 * https://github.com/kenwheeler/slick/issues/582
 * https://www.cluemediator.com/add-space-between-carousel-items-in-react-slick
 */
