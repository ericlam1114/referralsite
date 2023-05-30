import React from "react";
import Link from 'next/link'

const SponsorComponent = () => {
    const benefits = [
        {
            title: "🚀",
            content: "The Rundown is the fastest-growing AI newsletter in the world, with ~2500 new subs daily.",
        },
        {
            title: "📈",
            content: "170,000+ active subscribers, with a strong avg. open rate (44.1%).",
        },
        {
            title: "🔥",
            content: "High avg. email click rate of 11.3%.",
        },
        {
            title: "📍",
            content: "Primary locations of readers (in order): US, UK, Canada, Germany, Australia, Spain.",
        },
        {
            title: "🤓",
            content: "Our main audience includes engineers, designers, managers, investors, and startup founders in AI, looking to gain an edge on their work.",
        },
        {
            title: "💜",
            content: "Main sponsorship: avg. clicks: 750-1500 -Free Bonus: Main sponsors get added to our Tool database (250,000+ monthly traffic)",
        },
        {
            title: "💚",
            content: "Trending sponsorship: avg. clicks: 500-1500 -Free bonus: Trending sponsors will be included in a Twitter thread the night before the sponsorship. On average, the thread gets 1M-2.5M impressions",
        },
        {
            title: "⚡",
            content: "Coming soon for all sponsors: Free inclusion in The Rundown AI podcast",
        },
    ]

    return (
        <div className="mx-auto py-10 px-5 md:w-4/5 lg:w-3/5">
            <h2 className="text-3xl text-center -mt-12 font-bold mb-2 lg:-mb-12 md:-mt-24  lg:-mt-2 lg:pt-12 ">Sponsorship Information</h2>
            {/* <p className="text-center italic ">We empower founders & side hustlers who want to launch their own business.</p> */}

            {/* <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                    <div key={index} className="p-4 rounded bg-yellow-300">
                        <div className="flex">
                            <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                            <p className="ml-2">{benefit.content}</p>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* <div className="flex justify-center"> */}
            {/* <Link target="_blank" href="https://calendly.com/explodingideas-sponsorship/main"><button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none">
                    Book Sponsorship
                </button></Link> */}
            {/* </div> */}
        </div>
    );
};

export default SponsorComponent;
