import React from "react";
import { Link } from "react-router-dom";
import Image from "../../hooks/useImage";

const Footer2 = () => {
  const today = new Date();
  const thisYear = today.getFullYear();

  const socials = [
    {
      title: "twitter",
      logo: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </>
      ),
      anchor: "https://twitter.com/hasibulislam999/",
    },
    {
      title: "facebook",
      logo: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </>
      ),
      anchor: "https://www.facebook.com/hasibulislam999.dev/",
    },
  ];

  return (
    <section className="footer px-10 py-4 border-t border-base-300">
      <div className="items-center grid-flow-col gap-x-4">
        <Link to={"/home"}>
          <Image src={"logo.png"} height="30px" alt="footer logo" />
        </Link>
        <p>Copyright © {thisYear} - All right reserved by <span className="text-accent">Yes Sir, Okay Sir</span>.</p>
      </div>
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              to={`//${social.anchor}`}
              className="tooltip tooltip-primary"
              data-tip={`follow on ${social.title}`}
            >
              {social.logo}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer2;
