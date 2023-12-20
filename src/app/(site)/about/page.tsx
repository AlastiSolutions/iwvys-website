import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="sm:flex-row flex flex-col gap-5">
        <div className="flex flex-col flex-1 gap-4">
          <Image
            src="/images/about-featured.jpg"
            width={250}
            height={250}
            alt="About Image"
          />
          <p className="text-sm font-bold">IWVYS Tax ID: 77-0539957</p>
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <h1 className="text-2xl">Welcome</h1>
          <p className="font-light">
            We are a non profit organization that provides our local youth with
            a fast pitch softball league! Our fields are located at Leroy
            Jackson City fields. (Leroy Jackson Park).
          </p>
          <p>French Ave. Ridgecrest, CA.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
