import { useState } from "react";
import { PlusCircle, Search, X, Square, CheckSquare } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const TagDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(new Set());

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
          <PlusCircle className="h-6 w-6 text-[1rem] text-[#ffffff]" />
          TAGS
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[300px] overflow-hidden rounded-[15px] border-none bg-[#DCEBFF] p-0 shadow-md">
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
          <div className="max-h-[150px] w-full overflow-y-auto rounded-b-[15px] bg-white p-2 shadow-md">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex h-[50px] w-full cursor-pointer items-center justify-between rounded-md px-4 text-[#000000]"
                onClick={() => toggleSelectTag(tag)}>
                {selectedTags.has(tag) ? (
                  <CheckSquare className="h-5 w-5 text-[#061071]" />
                ) : (
                  <Square className="h-5 w-5 text-gray-400" />
                )}
                <span className="text-[14px]">{tag}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(tag);
                  }}>
                  <X className="h-5 w-5 cursor-pointer text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default TagDropdown;
