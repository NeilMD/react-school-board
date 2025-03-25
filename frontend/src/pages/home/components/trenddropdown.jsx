import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const TrendDropdown = () => {
  const [selected, setSelected] = useState("ALL");
  const options = ["New", "Hot", "Best"];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[40px] w-[100px] items-center justify-center gap-1 rounded-[20px] bg-sky-600 p-2 text-[1rem] font-medium font-normal text-white shadow-sm">
          <ChevronDown className="h-6 w-6 text-[1rem] text-white" />
          {selected}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="h-[150px] w-[120px] overflow-hidden rounded-[15px] border-none bg-white p-0 shadow-md">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => setSelected(option)}
            className="flex h-[50px] w-full cursor-pointer items-center justify-center text-[#000000] hover:bg-[#DCEBFF]">
            {option}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default TrendDropdown;
