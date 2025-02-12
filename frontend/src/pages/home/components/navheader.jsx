import React from "react";
import AcademixLogo from "@/assets/academix.svg";

function NavHeader() {
  return (
    <div className="z-10 flex h-fit w-full px-4 pt-4 pb-4">
      <img className="h-[30px]" src={AcademixLogo} />
    </div>
  );
}

export default NavHeader;
