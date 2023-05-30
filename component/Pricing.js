import React from "react";

const PricingComponent = () => {
    const pricingPlans = [
        {
            title: 'Monthly',
            price: '$20/mo',
            sub: 'Our popular pro plan serves you with edge providing insights and data',
            features: ['☑️ Pro Newsletter Subscription', '☑️ Premium Idea Archive', '☑️ Guides and Case Studies', '☑️ Educational Interviews'],
            buttonText: 'Buy Now',
        },
        {
            title: 'Yearly',
            price: '$99/year',
            sub: 'Our popular pro plan serves you with edge providing insights and data',
            features: ['☑️ Pro Newsletter Subscription', '☑️ Premium Idea Archive', '☑️ Guides and Case Studies', '☑️ Educational Interviews'],
            buttonText: 'Buy Now',
        },
    ]

    return (
        <div className="mx-auto py-16 px-5 pt-8 pb-8 md:w-4/5 lg:w-3/5 lg:pt-28 lg:pb-28">
            <h2 className="text-4xl text-center font-bold mb-4">Start Your Business</h2>
            <p className="text-sm text-center mb-10">Upgrade to Exploding Ideas Pro and get the insights you need to build your empire</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
                        <div className="px-9 py-5">
                            <h3 className="text-gray-800 text-3xl font-semibold mb-4">{plan.title}</h3>
                            <p className="pb-4 w-2/3">{plan.sub}</p>
                            <span className="text-black text-4xl font-bold">{plan.price}</span>
                        </div>
                        <div className="px-9 py-5 bg-sky-100">
                            <ul className="mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="mb-4 text-gray-600 ">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-2 px-3 text-center bg-black text-white rounded hover:shadow-xl">{plan.buttonText}</button>
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComponent;
