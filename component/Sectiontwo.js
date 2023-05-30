import React from "react";

const VideoTextSection = () => {
    const videoSrc = "https://www.youtube.com/embed/kyTu3mgGfUA";  // Your YouTube video

    return (
        <div className="flex pt-8 pb-8 flex-col md:flex-row items-center justify-between p-5 md:p-12 space-y-5 md:space-y-0 md:space-x-8 rounded-lg  lg:pt-28 lg:pb-28">
            <div className="md:w-1/2 space-y-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-black">Fast-Track Profits</h2>
                <p className="text-black leading-relaxed lg:mr-32">
                Life as an entrepreneur is busy, and we understand that every minute matters. Our newsletter is designed to help you cut through the noise and save time. We provide succinct, well-researched business insights and ideas so you can spend less time searching and more time building your venture. With us, you get only the essential information you need, delivered right to your inbox.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                <iframe
                    width="100%"
                    height="315"
                    src={videoSrc}
                    title="YouTube Video"  // Replace with your video title
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 object-cover rounded-lg shadow"
                />
            </div>
        </div>
    );
}

export default VideoTextSection;
