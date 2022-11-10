import React from "react";
import useProduct from "../../hooks/useProduct";
import CategoryHeader from "./CategoryHeader";

const TopRatingsFeaturedBrands = () => {
  const products = useProduct();

  const featuredRatings = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Top Ratings",
      slug: "top-ratings",
      content: (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow hover:shadow-md rounded"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded h-[127px] w-[127px] object-cover mx-auto mb-4"
              />
              <p className="flex mb-1">
                {[...Array(Math.round(product.rating.rate)).keys()].map(
                  (rating) => (
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
                  )
                )}
                <span className="ml-2 text-slate-500 text-sm font-medium">
                  ({product.rating.count})
                </span>
              </p>
              <p className="text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis mb-2" title={product.title}>
                {product.title}
              </p>
              <p className="text-primary text-base font-semibold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-accent"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Featured Brands",
      slug: "featured-brands",
      content: (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-4">
          {products.slice(0, 2).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow hover:shadow-md rounded"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded h-[182px] w-[270px] object-cover mx-auto mb-4"
              />
              <p className="text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis" title={product.title}>
                {product.title}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-neutral py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-y-0 gap-y-8">
          {featuredRatings?.map((featuredRating, index) => (
            <div key={index}>
              <CategoryHeader
                categoryIcon={featuredRating.icon}
                categoryName={featuredRating.title}
                categorySlug={featuredRating.slug}
              />
              <div className="my-8"></div>
              {index === 0 && featuredRating.content}
              {index === 1 && featuredRating.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatingsFeaturedBrands;
