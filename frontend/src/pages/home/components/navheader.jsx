import React from "react";
import AcademixLogo from "@/assets/academix.svg";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function NavHeader() {
  return (
    <div className="z-10 flex h-fit w-full items-center bg-white px-4 pt-4 pb-4">
      <div className="basis-1/3">
        <img className="align- h-[46px]" src={AcademixLogo} />
      </div>
      <div className="relative w-2xs basis-1/3">
        <input
          className="peer transition-default w-full rounded-2xl border border-gray-400 bg-gray-100 px-2 py-1 ring-0 placeholder:font-light focus:ring-2 focus:ring-cyan-300 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <Search className="transition-default color-gray color-gray-100 absolute inset-y-1 right-0 mx-3 stroke-2 text-gray-400 peer-focus:text-gray-600" />
      </div>
    </div>
  );
}

export default NavHeader;
