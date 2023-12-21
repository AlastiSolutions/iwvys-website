import React from "react";
import DataDropdown from "../FormComponents/DataDropdown";
import { KeyValueDropdownItem } from "@/constants/data.types";

interface StepTwoProps {
  data: any;
  handleChange: any;
}

const T_SHIRT_SIZES: KeyValueDropdownItem[] = [
  { key: "yxs", value: "Youth X-Small" },
  { key: "ys", value: "Youth Small" },
  { key: "ym", value: "Youth Medium" },
  { key: "yl", value: "Youth Large" },
  { key: "yxl", value: "Youth X-Large" },
  { key: "as", value: "Adult Small" },
  { key: "am", value: "Adult Medium" },
  { key: "al", value: "Adult Large" },
  { key: "axl", value: "Adult X-Large" },
];

const StepTwo: React.FC<StepTwoProps> = ({ data, handleChange }) => {
  return (
    <div className="max-w-xs md:max-w-2xl mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div id="playerInformationContainer mb-10">
          {Array.from(Array(data.playerCount)).map((player, index) => (
            <div key={index} className="flex flex-col flex-wrap gap-4">
              <div>
                <div id={`player-${index}-header`}>
                  <h1 className="text-xl font-bold">Player 1 Information</h1>
                </div>
                <div
                  className="flex md:flex-row flex-col gap-2"
                  id={`player-${index}-row-1`}
                >
                  <div id={`player-${index}-dob`} className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Player #1 D.O.B
                    </label>
                    <input
                      type="date"
                      required
                      placeholder="01/01/1999"
                      defaultValue={"01/01/1999"}
                    />
                  </div>
                  <div id={`player-${index}-age`} className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Player #1 Age
                    </label>
                    <input
                      type="number"
                      placeholder=""
                      className="bg-red-200"
                    />
                  </div>
                  <div
                    id={`player-${index}-tshirtsize`}
                    className="flex flex-col"
                  >
                    <DataDropdown
                      changeHandler={handleChange}
                      name={`player-${index}-tshirt-dropdown`}
                      label="Player #1 T-Shirt Size"
                      values={T_SHIRT_SIZES}
                    />
                  </div>
                  <div id={`player-${index}-experience`}>
                    <label htmlFor="">Player #1 Years Experience</label>
                    <input type="number" required className="bg-red-200" />
                  </div>
                </div>
                <div
                  id={`player-${index}-row-2`}
                  className="flex md:flex-row flex-col gap-2"
                >
                  <div id={`player-${index}-gender`}>
                    <label htmlFor="" className="font-semibold">
                      Player #1 Gender
                    </label>
                    <input type="radio" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
