import React from "react";

const Navbar2 = () => {
  /**
   * Header left hand side
   * create a call
   * send an email
   */
  const headerLeft = [
    {
      title: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          +8801906-315901
        </>
      ),
      anchor: "tel:+8801906315901",
    },
    {
      title: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          hasib143sl@gmail
        </>
      ),
      anchor: "mailto:hasib143sl@gmail.com",
    },
  ];

  /**
   * Header right hand side
   * select require language
   * select require currency
   */
  const headerRight = [
    {
      uniqueID: "LAN111",
      countryWise: [<>&#127482;&#127480; EN</>, <>&#127463;&#127465; BD</>],
    },
    {
      uniqueID: "CUR111",
      countryWise: [<>&#x24; EN</>, <>&#x09F3; BD</>],
    },
  ];

  return (
    <nav className="bg-secondary py-2">
      <div className="container mx-auto">
        <div className="text-white flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4 justify-between items-center">
          {/* left hand side */}
          <div className="flex gap-x-4">
            {headerLeft.map((property, index) => (
              <a
                key={index}
                href={property.anchor}
                className="flex gap-x-2 hover:text-primary"
              >
                {property.title}
              </a>
            ))}
          </div>

          {/* right hand side */}
          <div className="text-black flex gap-x-4">
            {headerRight.map((property) => (
              <select
                key={property.uniqueID}
                className="select select-bordered select-xs rounded w-fit"
              >
                {property.countryWise.map((element, index) => (
                  <option key={index} selected={index === 0}>
                    {element}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

/**
 * Currency symbols
 * https://www.toptal.com/designers/htmlarrows/currency/
 * Flag symbols
 * https://www.quackit.com/character_sets/emoji/emoji_v3.0/unicode_emoji_v3.0_characters_flags.cfm
 */
