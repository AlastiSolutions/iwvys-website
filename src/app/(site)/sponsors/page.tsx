import PDFTabs from "@/components/resources/PDFTabs";
import SponsorCarousel from "@/components/sponsors/SponsorCarousel";
import { SponsorItem } from "@/constants/data.types";
import React from "react";

const SponsorsPage = () => {
  const sponsorForm: SponsorItem = {
    name: "Sponsorship Form",
    url: "https://iwvys-pdfs.s3.us-west-1.amazonaws.com/2023-pdfs/Sponsor_Form_2023.pdf",
  };

  return (
    <div className="flex flex-col min-h-full h-full">
      <div className="mb-24">
        <PDFTabs {...sponsorForm} vertical={true} />
      </div>
      <SponsorCarousel />
    </div>
  );
};

export default SponsorsPage;
