import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

const SponsorshipComponent = () => {
    const options = [
        {
            title: "Premium Sponsorship:",
            benefits: [
                "Logo at the top of the email",
                "400-character text ad near the top of the email with multiple CTA options",
                "1 main sponsor available per email",
                "Free bonus: Main sponsorships get added to our Tool database (250,000+ monthly traffic)",
            ],
            cost: "$500",
            // details: "CPM ~$25, average clicks 750-1500 (depending on your product)",
            // example: "This example got 1202 clicks, plus massive brand recognition:"
        },
    ]

    return (
        <div className="mx-auto py-10 px-5 md:w-4/5 lg:w-3/5">
            <h2 className="text-3xl text-center font-bold mb-2">Sponsorship Details</h2>

            {options.map((option, index) => (
                <div key={index} className="my-8">
                    <h3 className="text-xl font-semibold mb-4">{option.title}</h3>

                    <ul className="list-none mb-4">
                        {option.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 h-12" />
                                <p>{benefit}</p>
                            </li>
                        ))}
                    </ul>

                    <p className="mb-2"><strong>Cost:</strong> {option.cost}</p>
                    <p className="mb-2">{option.details}</p>
                    <p>{option.example}</p>
                </div>
            ))}
             <div className="flex justify-center">
                <Link target="_blank" href="https://calendly.com/explodingideas-sponsorship/main"><button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none">
                    Book Sponsorship
                </button></Link>
            </div>
        </div>
    );
};

export default SponsorshipComponent;
