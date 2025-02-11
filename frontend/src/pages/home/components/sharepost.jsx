
import * as React from "react"
import calendarIcon from '../../../assets/calendar.png'
import locationIcon from '../../../assets/pin.png'
import imageIcon from '../../../assets/image.png'

export function SharePost(){
    return(
        <div className="main-share-post-container p-4 flex flex-col space-y-4 bg-white border border-blue-200 rounded-3xl shadow-md">
            <div className="flex items-start space-x-4 w-full">
                {/* Text Area */}
                <textarea
                className="w-[92%] p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-gray-100"
                placeholder="Share a post in this group"
                rows="1"
                style={{ minHeight: "40px" }}
                />

                {/* Submit Button */}
                <button className="submit-post-button w-12 h-12 bg-cyan-600 text-white rounded-full font-semibold flex items-center justify-center hover:bg-cyan-500 mt-2">
                <span className="text-2xl">+</span>
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-10 items-center">
                {/* Image Icon */}
                <div className="image-icon flex items-center space-x-3 cursor-pointer">
                    <img src={imageIcon} className="w-6 h-6" alt="Image Icon" />
                    <span className="text-gray-600">Image</span>
                </div>

                {/* Calendar Icon */}
                <div className="calendar-icon flex items-center space-x-3 cursor-pointer">
                    <img src={calendarIcon} className="w-6 h-6" alt="Calendar Icon" />
                    <span className="text-gray-600">Calendar</span>
                </div>

                {/* Location Icon */}
                <div className="location-icon flex items-center space-x-3 cursor-pointer">
                    <img src={locationIcon} className="w-6 h-6" alt="Location Icon" />
                    <span className="text-gray-600">Location</span>
                </div>
            </div>
        </div>
    );
}