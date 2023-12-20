"use client";

import { KeyValueDropdownItem } from "@/constants/data.types";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  input,
} from "@nextui-org/react";
import React, { useState } from "react";

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
  const [inputVal, setInputVal] = useState(values[0].value);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <Dropdown>
        <DropdownTrigger>
          <input
            type=""
            id={name}
            name={name}
            onChange={changeHandler}
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
          {values.map((value, index) => (
            <DropdownItem key={value.key}>{value.value}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DataDropdown;
