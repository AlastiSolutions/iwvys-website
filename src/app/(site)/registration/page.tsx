import React from "react";
import Link from 'next/link';

const RegistrationPage = () => {
    return <div className="flex flex-col justify-center items-center gap-10 h-[80vh]">
        <div id="registration__header">
            <h1 className="uppercase text-4xl">2024 Spring Registration</h1>
        </div>
        <div id="registration__body" className="flex flex-col items-center">
            <p>2024 Spring Registration is currently open.</p>
            <div id="registration__body-pricing-list" className="flex flex-col gap-4 mb-6 mt-5">
                <p className="self-center">Current Registration Fees are:</p>
                <ul className="self-end md:w-[25vw]">
                    <li className="flex flex-row justify-between"><span>$130</span><span> for Upper / Lower Divison</span></li>
                    <li className="flex flex-row justify-between"><span>$90</span><span> for Developmental Division</span></li>
                    <li className="flex flex-row justify-between"><span>$60</span><span> for T-Ball Division</span></li>
                </ul>
            </div>
            <div id="registration__body-register" className="flex flex-col items-center mb-8">
                <Link href="registration/apply" className="uppercase px-6 py-3 bg-iwvys-blue text-white rounded mb-2">Register</Link>
                <p className="font-extralight text-xs">* process fees may apply if paying electronically</p>
            </div>

            <p>Please contact us at <span className="font-semibold"><Link href="mailto:registration@iwvys.com">registration@iwvys.com</Link></span> if you have any questions.</p>
        </div>

    </div>;
};

export default RegistrationPage;
