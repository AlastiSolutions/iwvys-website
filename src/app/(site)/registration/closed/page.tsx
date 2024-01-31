import React from 'react';
import Link from 'next/link';

const RegistrationClosedPage = () => {
    return <div className='h-[70vh] flex flex-col justify-center items-center gap-4'>
        <div id="registration__closed-header">
            <h1 className='font-semibold text-4xl'>2024 Registration Closed</h1>
        </div>
        <div id="registration__closed-body" className='flex flex-col items-center gap-2'>
            <h3 className='font-semibold text-medium'>2024 Spring Registration is now closed.</h3>
            <p>Please get in touch with us at <span className='font-semibold'><Link href="mailto:registration@iwvys.com" target='_blank'>registration@iwvys.com</Link></span> if you have any questions.</p>
        </div>
    </div>
}

export default RegistrationClosedPage;
