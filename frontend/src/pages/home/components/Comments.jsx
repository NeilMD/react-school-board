import React, { useState } from 'react';

const Comments = () => {
    const [commentText, setCommentText] = useState("");

    const handlePostClick = () => {
        // For now, simply log the comment. In a real app, you would handle submission here.
        console.log("Comment posted:", commentText);
        setCommentText(""); // Clear the textarea after posting.
    };

    return (
        <div className="comments-section mt-4">
            <textarea
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full min-h-[50px] rounded p-2 border border-gray-300 resize-y"
            />
            <div className="mt-2 flex justify-end">
                <button
                    type="button"
                    onClick={handlePostClick}
                    className="rounded-full py-2 px-4 bg-blue-600 text-white cursor-pointer"
                >
                    Post
                </button>
            </div>

            {/* Hardcoded Comment and Reply */}
            <div className="mt-5">
                {/* Comment */}
                <div className="flex items-start mb-3">
                    {/* User avatar (grey circle) */}
                    <div className="w-8 h-8 rounded-full bg-gray-400 mr-3"></div>
                    <div>
                        <div className="font-normal">John Smith</div>
                        <div className="mb-1 font-light">This is a comment example.</div>
                        <div className="text-xs text-gray-500">10 mins ago</div>
                    </div>
                </div>

                {/* Reply */}
                <div className="flex items-start ml-10">
                    {/* User avatar (grey circle) */}
                    <div className="w-8 h-8 rounded-full bg-gray-400 mr-3"></div>
                    <div>
                        <div className="font-normal">Bob Bobson</div>
                        <div className="mb-1 font-light">This is a reply to the comment.</div>
                        <div className="text-xs text-gray-500">5 mins ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
