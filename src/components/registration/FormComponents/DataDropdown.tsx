"use client";

import { KeyValueDropdownItem } from "@/constants/data.types";

import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import React, { ChangeEventHandler, useState } from "react";

interface DataDropdownProps {

    name: string;
    label: string;
    changeHandler: any;
    values: KeyValueDropdownItem[];
}

const DataDropdown: React.FC<DataDropdownProps> = ({
    name,
    label,
    changeHandler,
    values,
}) => {
    const [inputVal, setInputVal] = useState(values[0].key);

    const handleDropdownChange = (event: ChangeEventHandler) => {
        console.log(event);
        changeHandler(event);
    };

    console.log(inputVal);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="mb-2">
                {label}
            </label>
            <Dropdown id={`${name}-dropdown`}>
                <DropdownTrigger>
                    <input
                        disabled
                        id={name}
                        name={name}
                        // onChange={handleDropdownChange}
                        className=" bg-iwvys-blue text-white rounded-sm"
                        value={inputVal}
                    />
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Player Registration Count"
                    onAction={(key) => {
                        setInputVal(values.find((val) => val.key === key)!.value);
                    }}
                >
                    {values.map((value) => (
                        <DropdownItem key={value.key} onClick={() => setInputVal(value.key)}>{value.value}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DataDropdown;
