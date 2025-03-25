import React from "react";
import AcademixLogo from "@/assets/academix.svg";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";

function NavHeader() {
  return (
    <div className="z-10 flex h-fit w-full items-center bg-white px-10 pt-4 pb-4">
      <div className="basis-1/3">
        <img className="align- h-[40px] w-[240px]" src={AcademixLogo} />
      </div>
      <div className="relative w-2xs basis-1/3">
        <input
          className="peer transition-default w-full rounded-2xl border border-gray-400 bg-gray-100 px-2 py-1 ring-0 placeholder:font-light focus:ring-2 focus:ring-cyan-300 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <Search className="transition-default color-gray color-gray-100 absolute inset-y-1 right-0 mx-3 stroke-2 text-gray-400 peer-focus:text-gray-600" />
      </div>
      <div className="ml-4 flex basis-1/3 justify-end">
        <Popover>
          <PopoverTrigger>
            <div className="group transition-default cursor-pointer rounded-full border border-transparent bg-gray-200 p-2 hover:border-gray-300 hover:bg-gray-100">
              <Bell className="stroke-gray-400 stroke-1 group-hover:stroke-(--color-cyan-600)" />
            </div>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="border-none bg-gray-300 font-light text-black">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default NavHeader;
