import { BoardMember } from "@/constants/data.types";
import React from "react";

interface BoardGridTabProps {
  member: BoardMember;
  hasName: boolean;
}

const BoardGridTab: React.FC<BoardGridTabProps> = ({ member, hasName }) => {
  return (
    <div className="bg-iwvys-blue px-4 py-2 text-white rounded-md">
      <h1 className="text-2xl font-semibold">{member.position}</h1>
      <p className="text-md font-light">{member.name}</p>
    </div>
  );
};

export default BoardGridTab;
