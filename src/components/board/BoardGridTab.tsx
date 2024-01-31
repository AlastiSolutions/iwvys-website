import { BoardMember } from "@/constants/data.types";
import { clsx } from "clsx";
import React from "react";

interface BoardGridTabProps {
    member: BoardMember;
    hasName: boolean;
}

const BoardGridTab: React.FC<BoardGridTabProps> = ({ member, hasName }) => {
    return (
        <div className="bg-iwvys-blue px-4 py-2 text-white rounded-md">
            <h1 className="text-xl font-semibold">{member.position}</h1>
            <p
                className={clsx(
                    hasName && "font-bold uppercase",
                    !hasName && "font-light",
                    "text-md"
                )}
            >
                {member.name}
            </p>
        </div>
    );
};

export default BoardGridTab;
