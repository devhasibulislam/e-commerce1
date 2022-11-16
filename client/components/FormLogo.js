import Image from "next/image";
import Link from "next/link";
import React from "react";

const FormLogo = () => {
  return (
    <Link href="/">
      <Image
        src={"/logo.png"}
        height={39}
        width={128}
        alt="E-Commerce Logo"
        title="E-Commerce Logo"
        className="w-32 mx-auto object-cover"
      />
    </Link>
  );
};

export default FormLogo;
