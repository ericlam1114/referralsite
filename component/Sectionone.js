import React from "react";

const VideoTextSection = () => {
    const videoSrc = "https://www.youtube.com/embed/kyTu3mgGfUA";  // Your YouTube video

    return (
        <div className="flex pt-8 pb-8 flex-col md:flex-row items-center justify-between p-5 md:p-12 space-y-5 md:space-y-0 md:space-x-8 rounded-lg lg:pt-28 lg:pb-28">
            <div className="w-full md:w-1/2">
                <iframe
                    width="100%"
                    height="315"
                    src={videoSrc}
                    title="YouTube Video"  // Replace with your video title
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow"
                />
            </div>
            <div className="md:w-1/2 space-y-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-black">Life-Changing Opportunities</h2>
                <p className="text-black leading-relaxed lg:mr-32">
                Dive into a world of unique business possibilities with our insights. We aim to illuminate your entrepreneurial path, providing you with the knowledge to discover, evaluate, and seize promising opportunities. Ignite your potential with us as we explore the ever-evolving landscape of today's business world.
                </p>
            </div>
        </div>
    );
}

export default VideoTextSection;
