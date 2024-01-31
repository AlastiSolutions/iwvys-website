import IWVYSNavbar from "@/components/global/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const MISSION_STATEMENT =
  "The league was created to provide a quality recreational fast-pitched softball league that provides a safe and competitive environment for players at all ages and developmental levels while creating healthy life habits, building positive relationships, promoting sportsmanship and gaining a senses of accomplishment. Indian Wells Valley Youth Softball serves the youth from Ridgecrest, California and the surrounding communities.";

export default function Home() {
  return (
    <>
      <div id="iwvys_header" className="flex flex-col items-center">
        <h1 className="mt-6 text-2xl">Indian Wells Valley Youth Softball</h1>
        <div className="flex md:flex-row flex-col mt-10 justify-center">
          <Image
            src={"/images/announcement.jpeg"}
            alt="Announcement Image"
            width={500}
            height={500}
          />
          <Image
            src="/images/announcement-2.png"
            width={500}
            height={500}
            alt="About Image 2"
          />
        </div>
      </div>
      <div id="iwvys_2024_season" className="flex flex-col">
        <h1 className="mt-6 text-2xl self-center">2024 Season</h1>
        <div className="flex mt-8">
          <div className="flex flex-col flex-1">
            <h1 className="text-2xl">Mission Statement</h1>
            <p className="mt-4 text-md overflow-auto leading-6">
              {MISSION_STATEMENT}
            </p>
            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4 ">
              <Button className="bg-iwvys-blue text-white px-8 py-6 rounded-md">
                Our Instagram
              </Button>
              <Button className="bg-iwvys-blue text-white px-8 py-6 rounded-md">
                Our Facebook
              </Button>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <Image
              src={"/images/logo-lg-transparent.png"}
              alt="Large IWVYS Logo"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <hr className="h-px w-full my-8 mx-10 bg-iwvys-blue border-0 dark:bg-gray-700" />
      <div id="iwvys_about" className="flex flex-col">
        <h1 className="mt-6 text-2xl self-center">About IWVYS</h1>
        <div className="grid grid-rows-3 sm:grid-cols-3">
          <div className="flex flex-col mt-8 sm:mt-4">
            <h2 className="text-2xl self-center md:block hidden">Our League</h2>
            <h2 className="text-2xl self-center md:hidden block">League</h2>
            <p className="self-center text-xs md:text-sm">
              We are a softball league located in Ridgecrest, CA
            </p>
          </div>
          <div className="flex flex-col mt-8 sm:mt-4">
            <h2 className="text-2xl self-center md:block hidden">
              Board of Directors
            </h2>
            <h2 className="text-2xl self-center md:hidden block">Board</h2>
            <p className="self-center text-xs md:text-sm">
              Our board members are volunteers. Without them our league would
              not be possible!
            </p>
          </div>
          <div className="flex flex-col mt-8 sm:mt-4 ">
            <h2 className="text-2xl self-center">Divisions</h2>
            <p className="self-center text-xs md:text-sm">
              We offer divisions for all ages! T-ball all the way through
              high-school age.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
