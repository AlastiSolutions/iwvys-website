"use client";

import React from "react";
import { SponsorItem } from "@/constants/data.types";
import { Image } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import dynamic from "next/dynamic";

// const Carousel = dynamic(() => import("react-responsive-carousel"), {
//   ssr: false,
// });

interface SponsorLevelContainerProps {
  sponsors: SponsorItem[] | [];
  id: string;
  headerId: string;
  carouselId: string;
  title: string;
  subtitle: string;
}

const SponsorLevelContainer: React.FC<SponsorLevelContainerProps> = ({
  sponsors,
  id,
  headerId,
  carouselId,
  title,
  subtitle,
}) => {
  return (
    <div id={id} className="flex flex-col">
      {sponsors.length > 0 && (
        <div className="flex flex-col">
          <div id={headerId} className="flex flex-col">
            <div className="self-center uppercase text-xl font-semibold grid md:grid-cols-3 items-center gap-4">
              <hr className="md:h-1 h-0 bg-iwvys-blue" />
              <p className="text-center">{title}</p>
              <hr className="md:h-1 h-0 bg-iwvys-blue" />
            </div>
            <div>
              <p className="text-center">{subtitle}</p>
            </div>
          </div>

          <div id={carouselId}>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              interval={5000}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              dynamicHeight={false}
              centerMode={true}
              centerSlidePercentage={100}
            >
              {sponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  id={`${sponsor.name}-${index}`}
                  className="w-full flex justify-center items-center mt-8"
                >
                  <Image src={sponsor.url} alt={sponsor.name} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorLevelContainer;
