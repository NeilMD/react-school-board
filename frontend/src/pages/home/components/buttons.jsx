import { useState } from "react";
import { ChevronDown, PlusCircle, Search, X, Square, CheckSquare, PlusSquare } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";


export function DropdownButton() {
  const [selected, setSelected] = useState("ALL");
  const options = ["New", "Hot", "Best"];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="flex items-center justify-between w-[120px] h-[40px] px-7 bg-[#061071] rounded-[20px] text-[#ffffff] font-medium shadow-sm"
        >
          <ChevronDown className="w-6 h-6 text-[#ffffff]" />
          {selected}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[120px] h-[150px] bg-white shadow-md rounded-[15px] overflow-hidden border-none p-0"
    
      >
        {options.map((option) => (
          <div
            key={option}
            onClick={() => setSelected(option)}
            className="w-full h-[50px] flex items-center justify-center cursor-pointer hover:bg-[#DCEBFF] text-[#000000]"
          >
            {option}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export function SearchableTagInput() {
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
                <button className="flex items-center justify-between w-[120px] h-[40px] px-5 bg-[#061071] rounded-[20px] text-[#ffffff] font-medium shadow-sm">
                    <PlusCircle className="w-6 h-6 text-[#ffffff]" />
                    TAGS
                </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-[300px] bg-[#DCEBFF] shadow-md rounded-[15px] overflow-hidden border-none p-0">
                <div className="p-2 relative">
                    <div className="flex items-center border-none px-2 rounded-md">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
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
                            className="w-full p-2 border-none outline-none focus:ring-0"
                        />
                        {searchTerm && (
                            <button type="button" onClick={() => setSearchTerm("")} className="ml-2">
                                <X className="w-5 h-5 cursor-pointer text-gray-400" />
                            </button>
                        )}
                    </div>
                </div>
                {tags.length > 0 && (
                    <div className="w-full bg-white shadow-md rounded-b-[15px] p-2 max-h-[150px] overflow-y-auto">
                        {tags.map((tag) => (
                            <div 
                                key={tag} 
                                className="w-full h-[50px] flex items-center justify-between px-4 cursor-pointer rounded-md text-[#000000]"
                                onClick={() => toggleSelectTag(tag)}
                            >
                                {selectedTags.has(tag) ? (
                                    <CheckSquare className="w-5 h-5 text-[#061071]" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                                <span className="text-[14px]">{tag}</span>
                                <button type="button" onClick={(e) => { e.stopPropagation(); removeTag(tag); }}>
                                    <X className="w-5 h-5 cursor-pointer text-gray-400" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

export function AddPostButton() {
  
    return (
        <div>
            <button
            className="flex items-center justify-between w-[120px] h-[40px] px-5 bg-[#061071] rounded-[20px] text-[#ffffff] font-medium shadow-sm"
          >
            <PlusSquare className="w-6 h-6 text-[#ffffff]" />
            POST
          </button>
        </div>
    );
}


