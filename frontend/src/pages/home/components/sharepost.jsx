import { Calendar, Image, MapPin } from "lucide-react";
import React, {useState, useEffect} from "react";

export function SharePost() {

    // temp user for testing -- will need to fetch json for users later
    const user = {
        id: 1, 
        name: "Chloe",
        avatar: "https://avatar.com"
    };

    // manages the state of the post
    const [posts, setPosts] = useState(() => {
        return JSON.parse(localStorage.getItem("posts")) || []; // will be passed into the local storage for now since no db 
    });
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [showInputs, setShowInputs] = useState({
        image: false,
        date: false,
        location: false,
    });

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts)); // saves post into the local storage for now
    }, [posts]);

    // creates new post and resets the states back to the original state
    const handlePostSubmit = () => {
        if (!content.trim()) return;
    
        const newPost = {
            id: Date.now(),
            userId: user.id,         
            userName: user.name,     
            userAvatar: user.avatar,
            content,
            image,
            location,
            date,
            timestamp: new Date().toLocaleString(),
        };
    
        setPosts([newPost, ...posts]);
        setContent("");
        setImage(null);
        setLocation("");
        setDate("");
        setShowInputs({ image: false, date: false, location: false });
      };

    return (
        <div className="home-card main-share-post-container flex cursor-pointer flex-col space-y-2 p-4">
        <div className="flex w-full items-center space-x-4">
            {/* Text Area */}
            <textarea
            className="transition-default w-[92%] resize-none rounded-xl bg-gray-100 p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Share a post in this group"
            rows="1"
            style={{ minHeight: "40px" }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />

            {/* Submit Button */}
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-(--academix-blue) font-semibold text-black"
            onClick={handlePostSubmit}>
            <span className="text-2xl font-extralight">+</span>
            </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-2 space-x-1">
            {/* Image Icon */}
            <div className="hover-effect image-icon transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
            onClick={() => setShowInputs({ ...showInputs, image: !showInputs.image })}>
            <Image className="text-gray-500" />
            <span className="text-gray-600">Image</span>
            </div>

            {/* Calendar Icon */}
            <div className="hover-effect calendar-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
            onClick={() => setShowInputs({ ...showInputs, date: !showInputs.date })}>
            <Calendar className="text-gray-500" />
            <span className="text-gray-600">Calendar</span>
            </div>

            {/* Location Icon */}
            <div className="hover-effect location-icon hover-effect transition-default flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2"
            onClick={() => setShowInputs({ ...showInputs, location: !showInputs.location })}>
            <MapPin className="text-gray-500" />
            <span className="text-gray-600">Location</span>
            </div>
        </div>

        {/* Optional Inputs -- need to have UI fixed*/} 
        <div className="mt-2 space-y-2">
                {showInputs.image && (
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full bg-gray-100 p-2 rounded"
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} 
                    />
                )}
                {showInputs.date && (
                    <input
                        type="date"
                        className="w-full bg-gray-100 p-2 rounded"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                )}
                {showInputs.location && (
                    <input
                        type="text"
                        className="w-full bg-gray-100 p-2 rounded"
                        placeholder="Add location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                )}
            </div>
        </div>
    );
}
