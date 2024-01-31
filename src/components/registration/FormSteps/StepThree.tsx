import React from "react";

interface StepThreeProps {
  data: any;
  handleChange: any;
}

const StepThree: React.FC<StepThreeProps> = ({ data, handleChange }) => {
  return (
    <div className="max-w-xs md:max-w-2xl mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div id="playerParentContactInformation">
            
        </div>
      </form>
    </div>
  );
};

export default StepThree;
