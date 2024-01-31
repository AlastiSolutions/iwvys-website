import IWVYSNavbar from "@/components/UI/Navbar";
import React from "react";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-[100vh] h-full min-w[100vw] w-full">
            <IWVYSNavbar selectedTabIndex={0} />
            <div id="main_body" className="h-full w-full">
                <section
                    id="home_content"
                    className="mx-auto h-full sm:w-[60%] w-full flex flex-col items-center p-4"
                >
                    {children}
                </section>
                <div className="flex justify-center mt-6 sm:mt-12">
                    <p className="bottom-0 sticky pb-1 hidden md:block  ">
                        Copyright © 2023 Indian Wells Valley Youth Softball - All rights
                        reserved
                    </p>
                    <p className="bottom-0 sticky pb-1 block md:hidden  ">
                        Copyright © 2023 Indian Wells Valley Youth Softball
                    </p>
                </div>
            </div>
        </main>
    );
}
