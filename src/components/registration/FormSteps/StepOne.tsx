"use client";

import React, { useState } from "react";

import DataDropdown from "../FormComponents/DataDropdown";
import { KeyValueDropdownItem } from "@/constants/data.types";

interface StepOneProps {
    data: any;
    handleChange: any;
}

const PLAYER_COUNT_KV: KeyValueDropdownItem[] = [
    { key: "one", value: "1 Player" },
    { key: "two", value: "2 Players" },
    { key: "three", value: "3 Players" },
    { key: "four", value: "4 Players" },
];

const StepOne: React.FC<StepOneProps> = ({ data, handleChange }) => {
    const [playerCount, setPlayerCount] = useState(4);

    const changeHandler = (event: any) => {
        handleChange(event);
        console.log(event);
    };

    return (
        <div className="max-w-xs md:max-w-2xl mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div id="playerCountContainer" className="mb-10">
                    <DataDropdown
                        name="playerCount"
                        label="How many players are you registering?"
                        changeHandler={changeHandler}
                        values={PLAYER_COUNT_KV}
                    />
                </div>
                <div
                    id="playerNameContainer"
                    className="mb-10 flex flex-col md:grid md:grid-cols-2 gap-4"
                >
                    {Array.from(Array(playerCount)).map((player, index) => (
                        <div key={index}>
                            <div id={`player-${index}-container`}>
                                <h1>{`Player ${index + 1}`}</h1>
                            </div>
                            <div
                                id={`playerNameInput-${index}`}
                                className="flex flex-col gap-2"
                            >
                                <input
                                    id={`playerNameInput-${index}-first`}
                                    name={`playerNameInput-${index}-first`}
                                    className="border border-red-200 px-2"
                                    placeholder="First Name"
                                />
                                <input
                                    id={`playerNameInput-${index}-middle`}
                                    name={`playerNameInput-${index}-middle`}
                                    className="border border-red-200 px-2"
                                    placeholder="Middle Name"
                                />
                                <input
                                    id={`playerNameInput-${index}-last`}
                                    name={`playerNameInput-${index}-last`}
                                    className="border border-red-200 px-2"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default StepOne;
