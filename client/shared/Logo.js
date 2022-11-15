import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/logo.png"
          height={80}
          width={150}
          alt="E-Commerce Logo"
          title="E-Commerce Logo"
        />
      </Link>
    </>
  );
};

export default Logo;
