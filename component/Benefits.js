import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Membership benefits data
const membershipBenefits = [
    {
        title: '1. The Idea Archive💡',
        benefits: [
            'Access to an extensive library of past newsletter issues', 
            'In-depth analysis of successful business ideas', 
            'Identification of key factors behind successful business ideas',
            'Industry-specific insights to help you find your niche'
        ],
    },
    {
        title: '2. Guides and Case Studies📚',
        benefits: [
            'Detailed case studies of successful business models', 
            'Practical step-by-step guides on launching your business',
            'Comprehensive guides on growth hacking techniques and strategies',
            'Resources to help you effectively validate your business idea'
        ],
    },
    {
        title: '3. Educational Interviews💬',
        benefits: [
            'Exclusive interviews with successful entrepreneurs and business leaders',
            'First-hand stories of successful business launches',
            'Practical advice on overcoming common startup challenges',
            'Profound insights into the current state and future trends of online businesses'
        ],
    },
];

const ProMembershipComponent = () => {
    return (<div className=" pt-8 pb-8 lg:pt-28 lg:pb-28">
            <h2 className="text-2xl lg:text-3xl text-center font-bold mb-2">What You Get As a Pro Member</h2>
            <h3 className="text-base lg:text-xl text-center lg:font-semibold mb-8">Pro resources to launch a profitable business in 1/10th of the time!</h3>
        <div className="mx-auto py-10 px-5 md:w-4/5 lg:w-3/5  bg-white  border-black rounded-lg shadow-sm">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-0">
                {membershipBenefits.map((benefit, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-2xl lg:text-lg mb-2 flex justify-center">{benefit.title}</h4>
                        <ul className="list-none space-y-2">
                            {benefit.benefits.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="p-2" >✔️</div>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}</div>
            </div>

            {/* <p className="text-center mt-10">Every week we publish interviews from successful founders to provide valuable insights. Pro members get exclusive pro insights from these interviews.</p> */}
        </div>
    );
};

export default ProMembershipComponent;