import React, { useState } from 'react';

const FAQSection = () => {
    const [selected, setSelected] = useState(null);

    const faqs = [
        { question: 'What kind of business ideas will be included in the newsletter?', answer: 'The newsletter will cover a wide range of business ideas, spanning various industries such as technology, e-commerce, service-based businesses, and more. We aim to provide diverse ideas to cater to different interests, skills, and investment levels.' },
        { question: 'How often will I receive the newsletter?', answer: 'The newsletter is sent out weekly. This frequency ensures that you get regular updates and fresh business ideas without overwhelming your inbox.' },
        { question: 'Can I access past issues of the newsletter once I subscribe?', answer: 'Yes, once you subscribe to Pro, you will have access to our entire archive of past newsletters. This allows you to dive into a wealth of business ideas immediately after subscribing.' },
        { question: 'Is there a refund policy if I decide that the newsletter is not right for me?', answer: 'We offer a 30-day money-back guarantee. If within the first 30 days you decide that our newsletter is not right for you, you can cancel your subscription and receive a full refund.' },
        { question: 'What additional benefits do I get with a paid subscription?', answer: 'With a paid subscription, you get exclusive access to the archive of past business ideas, educational interviews and growth guides. We update the Pro dashboard every week.' },
    ];

    const handleClick = index => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };

    return (
        <div className="lg:pt-28 lg:pb-28">
            <div >
                <h2 className="font-bold text-3xl flex justify-center ">
                    FAQ
                </h2>
            </div>
            <div className="flex justify-center pb-24">
                <div className="faq-section px-72 mx-36 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border bg-white shadow-sm rounded-md  mt-2 overflow-auto">
                            <h3 className="bg-white px-2 py-2 " onClick={() => handleClick(index)}>
                                {faq.question}
                              {" "} {selected === index ? <div className="flex justify-end" >-</div> : <div className="flex justify-end" >+</div>}
                            </h3>
                            {selected === index && <p className="bg-white px-2 py-2">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
