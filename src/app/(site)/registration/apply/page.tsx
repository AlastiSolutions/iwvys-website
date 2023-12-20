"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Progress } from "@nextui-org/react";
import StepOne from "@/components/registration/FormSteps/StepOne";
import { FormPlayerName } from "@/constants/data.types";
import * as z from "zod";

const RegistrationFormPage = () => {
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

      <div id="form">
        <StepOne data={formData} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default RegistrationFormPage;
