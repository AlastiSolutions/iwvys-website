"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

interface NavbarProps {
    selectedTabIndex: number;
}

const MENU_ITEMS = [
    "HOME",
    "CALENDAR",
    "SPONSORS",
    "SHOP",
    "ABOUT",
    "BOARD",
    "RESOURCES",
    "REGISTRATION",
];

const IWVYSNavbar: React.FC<NavbarProps> = ({ selectedTabIndex }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const path = usePathname();


    const getSelectedIndex = () => {
        switch (path.toLowerCase().substring(1)) {
            case "home":
                return 0;
            case "calendar":
                return 1;
            case "sponsors":
                return 2;
            case "shop":
                return 3;
            case "about":
                return 4;
            case "board":
                return 5;
            case "resources":
                return 6;
            case "registration":
                return 7;
            case "registration/apply":
                return 7;
            case "registration/closed":
                return 7;
            default:
                return 0;
        }
    };

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            isBlurred={false}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                base: ["h-20", "w-full", "flex", "flex-row", "bg-iwvys-blue"],
                wrapper: [""],
                content: [""],
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "text-white",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-white",
                ],
                menu: ["bg-white", "text-[#1E295B]", "mt-2"],
                toggleIcon: ["text-white"],
            }}
        >
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src="/images/logo-sm-transparent.png"
                            alt="IWVYS Logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    className="sm:hidden"
                />
                <NavbarContent className="hidden sm:flex ">
                    {MENU_ITEMS.map((item, index) => (
                        <NavbarItem
                            key={`${item}-${index}`}
                            isActive={getSelectedIndex() === index}
                        // onClick={() => setNavIndex(index)}
                        >
                            <Link
                                href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                                className="w-full"
                            >
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </NavbarContent>
            <NavbarMenu>
                {MENU_ITEMS.map((item, index) => (
                    <NavbarMenuItem
                        key={`${item}-${index}`}
                        isActive={getSelectedIndex() === index}
                    >
                        <Link
                            href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                            className="w-full"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default IWVYSNavbar;
