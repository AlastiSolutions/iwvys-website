import React from "react";
import Link from "next/link";

interface PDFTabsProps {
    name: string;
    url: string;
    vertical: boolean;
    toMarket: boolean;
}

const PDFTabs: React.FC<PDFTabsProps> = ({ name, url, vertical, toMarket }) => {
    return !vertical ? (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2  lg:justify-between items-center ">
            <h2 id="title" className={toMarket ? "text-xl font-semibold" : "text-medium font-semibold"}>
                {name}
            </h2>
            <div
                id="link"
                className="bg-iwvys-blue hover:bg-white hover:text-[#1E295B] hover:border-[#1E295B] text-white border-1 border-transparent px-2 py-1 rounded-md"
            >
                <Link href={url} target="_blank">
                    Download
                </Link>
            </div>
        </div >
    ) : (
        <div className="flex flex-col gap-4 items-center">
            <h2 id="title" className={toMarket ? "text-2xl uppercase underline underline-offset-2 font-semibold" : "text-medium font-semibold"}>
                {name}
            </h2>
            <div
                id="link"
                className="bg-iwvys-blue hover:bg-white hover:text-[#1E295B] hover:border-[#1E295B] text-white border-1 border-transparent px-2 py-1 rounded-md"
            >
                <Link href={url} target="_blank">
                    Download
                </Link>
            </div>
        </div >
    );
};

export default PDFTabs;
