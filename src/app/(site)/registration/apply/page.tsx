"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Progress, button } from "@nextui-org/react";
import { FormPlayerName } from "@/constants/data.types";
import * as z from "zod";
import StepOne from "@/components/registration/FormSteps/StepOne";
import StepTwo from "@/components/registration/FormSteps/StepTwo";

const RegistrationFormPage = () => {
  const buttonClasses = "px-4 py-2 rounded-md bg-iwvys-blue text-white";

  const [pageIndex, setPageIndex] = useState(1);
  const [formData, setFormData] = useState({
    playerCount: 1,
    playerNames: [],
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    alert(formData);
  };

  const formSteps = [
    <StepOne key="step_one" data={formData} handleChange={handleChange} />,
    <StepTwo key="step_two" data={formData} handleChange={handleChange} />,
  ];

  const submitHandler = () => {};

  const nextFormStep = () => {
    setPageIndex((prev) => prev + 1);
  };

  const prevFormStep = () => {
    setPageIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div id="header">2024 IWVYS Registration</div>
      <div id="progress" className="mb-8">
        <p className="text-md">{`Step ${pageIndex} of 7`}</p>
        <Progress
          aria-label={`Step ${pageIndex}`}
          value={(pageIndex / 7) * 100}
          classNames={{
            indicator: "bg-iwvys-blue",
          }}
        />
      </div>

      <div id="form">{formSteps[pageIndex - 1]}</div>
      <div id="form_actions" className="flex flex-wrap gap-x-6 mx-auto">
        {pageIndex - 1 !== 0 && (
          <Button onClick={prevFormStep} className={buttonClasses}>
            Back
          </Button>
        )}
        {pageIndex - 1 !== formSteps.length && (
          <Button onClick={nextFormStep} className={buttonClasses}>
            Next
          </Button>
        )}
        {pageIndex - 1 === formSteps.length && (
          <Button onClick={submitHandler} className={buttonClasses}>
            Register
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegistrationFormPage;
