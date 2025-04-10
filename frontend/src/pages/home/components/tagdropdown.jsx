import { useState } from "react";
import { Search, X, Tag } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const TagDropdown = ({ tags, setTags, selectedTags, setSelectedTags }) => {
  console.log(tags);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Corrected handleAddTag to accept `e`
  const handleAddTag = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (searchTerm.trim() !== "" && !tags.includes(searchTerm)) {
      setTags([...tags, searchTerm.trim()]);
      setSearchTerm("");
    }
  };

  const toggleSelectTag = (tag) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      newSet.delete(tag);
      return newSet;
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-[40px] w-[100px] cursor-pointer items-center justify-center gap-1 rounded-[20px] bg-sky-600 p-2 text-[1rem] font-medium font-normal text-[#ffffff] shadow-sm">
          <Tag className="h-6 w-6 text-[1rem] text-[#ffffff]" />
          TAGS
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[300px] overflow-hidden rounded-[15px] border-none p-0 shadow-md">
        <div className="relative p-2">
          <div className="flex items-center rounded-md border-none px-2">
            <Search className="mr-2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tags"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddTag(e);
                }
              }}
              className="w-full border-none p-2 outline-none focus:ring-0"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="ml-2">
                <X className="h-5 w-5 cursor-pointer text-gray-400" />
              </button>
            )}
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex max-h-[150px] w-full flex-col gap-y-2 overflow-y-auto rounded-b-[15px] bg-white px-2 pt-2 pb-6 shadow-md">
            {tags.map((tag) => {
              const isSelected = selectedTags.has(tag);
              const checkboxId = `tag-${tag}`;

              return (
                <div
                  key={tag}
                  className={`flex h-[50px] w-full cursor-pointer items-center gap-4 rounded-md px-4 py-2 text-[#000000] transition hover:bg-gray-100 ${
                    isSelected ? "bg-cyan-100" : ""
                  }`}
                  onClick={() => toggleSelectTag(tag)}>
                  <Checkbox
                    id={checkboxId}
                    checked={isSelected}
                    onCheckedChange={() => toggleSelectTag(tag)}
                    className="rounded-xs border-1"
                  />
                  <label
                    htmlFor={checkboxId}
                    className="cursor-pointer text-sm leading-none font-light">
                    {tag}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TagDropdown;
