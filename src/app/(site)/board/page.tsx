import React from "react";
import { BoardMember } from "@/constants/data.types";
import BoardGridTab from "@/components/board/BoardGridTab";

const BOARD_MEMBERS: BoardMember[] = [
  { position: "President", name: "Magen Rinaldi" },
  { position: "Vice President", name: "Jillian Boyle" },
  { position: "Secretary", name: "I'mari Ross-Shelton" },
  { position: "Treasurer", name: "Andrew Hernandez" },
  { position: "Player Representative", name: "Amber Kisselburg" },
  { position: "Publicity", name: "Alice Hibbs" },
  { position: "Equipment/Field Director", name: "Cody Pauxtis" },
  { position: "Director of Player Development", name: "Available Position" },
  { position: "Member at Large", name: "Rebecca Avitia" },
  { position: "Upper League VP", name: "Dana Stephens" },
  { position: "Sponsorships", name: "Rita Davis" },
  { position: "Lower League VP", name: "John Rettig" },
];

const BoardPage = () => {
  return (
    <div className="flex flex-col min-h-[80vh] h-full w-full justify-center items-center">
      <div id="board_header" className="mb-8">
        <h1 className="text-3xl font-semibold uppercase">Board of Directors</h1>
      </div>
      <div className="grid sm:grid-cols-3 sm:grid-rows-4 grid-cols-1 gap-4">
        {BOARD_MEMBERS.map((member, index) => {
          const hasName = member.name === "Available Position";

          return (
            <BoardGridTab
              key={member.position}
              member={member}
              hasName={hasName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardPage;
