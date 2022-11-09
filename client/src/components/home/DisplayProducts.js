import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";

const DisplayProducts = ({ products }) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
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
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded border hover:border-primary relative"
          >
            {/* before content */}
            <div className="absolute top-2 left-2">
              <span className="badge badge-primary text-xs font-medium text-white">
                {product.discount}% off
              </span>
            </div>

            {/* after content */}
            <div className="flex flex-col h-full">
              {/* product thumbanail */}
              <figure>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-[345px] w-[345px] object-cover"
                />
              </figure>

              <div className="card-body mt-auto justify-end">
                {/* product title section */}
                <h2 className="card-title" title={product.title}>
                  {product.title.length >= 31
                    ? product.title.slice(0, 29) + " ..."
                    : product.title}
                </h2>

                {/* rating section */}
                <p className="flex">
                  {[...Array(product.ratings).keys()].map((rating) => (
                    <span key={rating} className="text-[#ffd05f]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </p>

                {/* pricing and carting */}
                <p className="flex justify-between items-center">
                  {/* price section */}
                  <span className="text-primary text-sm font-medium flex gap-x-2">
                    $
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                    <del className="text-slate-500">{product.price}</del>
                  </span>

                  <span className="flex gap-x-2">
                    {/* brief overview */}
                    <span
                      className="btn btn-primary btn-sm btn-circle text-white"
                      title="brief overview"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path
                          fillRule="evenodd"
                          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    {/* add to cart button */}
                    <span
                      className="btn btn-primary btn-sm btn-circle text-white"
                      title="add to cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DisplayProducts;

/**
 * Gap between cards in slider
 * https://github.com/kenwheeler/slick/issues/582
 */
