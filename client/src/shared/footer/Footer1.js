import React from "react";
import { Link } from "react-router-dom";

const Footer1 = () => {
  const footerMenu = [
    {
      title: "Service",
      links: [
        {
          subTitle: "Services",
          anchor: "/services",
        },
        {
          subTitle: "Design",
          anchor: "/design",
        },
        {
          subTitle: "Marketing",
          anchor: "/marketing",
        },
        {
          subTitle: "Advertisement",
          anchor: "/advertisement",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          subTitle: "About Us",
          anchor: "/about-us",
        },
        {
          subTitle: "Contact",
          anchor: "/contact",
        },
        {
          subTitle: "Jobs",
          anchor: "/jobs",
        },
        {
          subTitle: "Press Kit",
          anchor: "/press-kit",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          subTitle: "Terms of use",
          anchor: "/terms-of-use",
        },
        {
          subTitle: "Privacy Policy",
          anchor: "/privacy-policy",
        },
        {
          subTitle: "Cookie Policy",
          anchor: "/cookie-policy",
        },
      ],
    },
    {
      title: "About us",
      links: [
        {
          subTitle: "Career",
          anchor: "/career",
        },
        {
          subTitle: "Our Stories",
          anchor: "/our-stories",
        },
        {
          subTitle: "Our Cares",
          anchor: "/our-cares",
        },
        {
          subTitle: "Terms & Conditions",
          anchor: "/terms-and-conditions",
        },
        {
          subTitle: "Privacy & Policy",
          anchor: "/privacy-and-policy",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          subTitle: "Features",
          anchor: "/features",
        },
        {
          subTitle: "Enterprise",
          anchor: "/enterprise",
        },
        {
          subTitle: "Security",
          anchor: "/security",
        },
        {
          subTitle: "Pricing",
          anchor: "/pricing",
        },
      ],
    },
    {
      title: "Apps",
      links: [
        {
          subTitle: "Mac",
          anchor: "/mac",
        },
        {
          subTitle: "Windows",
          anchor: "/windows",
        },
        {
          subTitle: "iPhone",
          anchor: "/iphone",
        },
        {
          subTitle: "Android",
          anchor: "/android",
        },
      ],
    },
  ];

  return (
    <section className="footer p-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2">
      {footerMenu.map((menu, index) => (
        <div key={index}>
          <span className="footer-title">{menu.title}</span>
          {menu.links.map((link, index) => (
            <Link key={index} to={link.anchor} className="hover:text-primary">
              {link.subTitle}
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Footer1;
