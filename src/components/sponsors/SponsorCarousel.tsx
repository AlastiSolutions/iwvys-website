import React from "react";
import { Image } from "@nextui-org/react";
import { SponsorItem } from "@/constants/data.types";
import { m } from "framer-motion";
import SponsorLevelContainer from "./SponsorLevelContainer";

const PLATINUM_SPONSORS: SponsorItem[] | [] = [];
const GOLD_SPONSORS: SponsorItem[] | [] = [
  { name: "Dosen", url: "/sponsors/gold/dosen.png" },
  { name: "Leidos", url: "/sponsors/gold/leidos.png" },
  {
    name: "Michaels Certified Air Inc",
    url: "/sponsors/gold/michaels_certified_air_inc.png",
  },
];
const SILVER_SPONSORS: SponsorItem[] | [] = [
  {
    name: "Elite Property Management",
    url: "/sponsors/silver/elite_property_management.png",
  },
  { name: "Elks", url: "/sponsors/silver/elks.png" },
  {
    name: "Gary Charlon State Farm",
    url: "/sponsors/silver/gary_charlon_state_farm.png",
  },
  {
    name: "High Desert Air Ductor",
    url: "/sponsors/silver/high_desert_air_ductor.png",
  },
  {
    name: "Indian Wells Valley United Way",
    url: "/sponsors/silver/iwvuw.png",
  },
  {
    name: "Jim Charlon Ford",
    url: "/sponsors/silver/jim_charlon_ford.png",
  },
  {
    name: "Odeh Mortgages",
    url: "/sponsors/silver/odeh_mortgages.png",
  },
  {
    name: "Palomino Properties",
    url: "/sponsors/silver/palomino_properties.png",
  },
  { name: "Pizza Factory", url: "/sponsors/silver/pizza_factory.png" },
  {
    name: "Protow & Recovery",
    url: "/sponsors/silver/protow_and_recovery.png",
  },
  {
    name: "Trane",
    url: "/sponsors/silver/trane.jpg",
  },
];
const TY_SPONSORS: SponsorItem[] | [] = [
  { name: "T&T Alignment", url: "/sponsors/thank_you/t_and_t_alignment.png" },
];

const SponsorCarousel = () => {
  return (
    <div>
      <div id="sponsor_form"></div>

      <SponsorLevelContainer
        id="plat_sponsors"
        headerId="plat_sponsors_header"
        carouselId="plat_sponsors_carousel"
        sponsors={PLATINUM_SPONSORS}
        title="Platinum Sponsors"
        subtitle="$3000+"
      />
      <SponsorLevelContainer
        id="gold_sponsors"
        headerId="gold_sponsors_header"
        carouselId="gold_sponsors_carousel"
        sponsors={GOLD_SPONSORS}
        title="Gold Sponsors"
        subtitle="$1000 - $2999"
      />
      <SponsorLevelContainer
        id="silver_sponsors"
        headerId="silver_sponsors_header"
        carouselId="silver_sponsors_carousel"
        sponsors={SILVER_SPONSORS}
        title="Silver Sponsors"
        subtitle="$250 - $999"
      />
      <SponsorLevelContainer
        id="ty_sponsors"
        headerId="ty_sponsors_header"
        carouselId="ty_sponsors_carousel"
        sponsors={TY_SPONSORS}
        title="Thank Your Sponsors"
        subtitle="$1 - $249"
      />
    </div>
  );
};

export default SponsorCarousel;
