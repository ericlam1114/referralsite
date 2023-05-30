import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Testimonial 1",
            photo: "/testimonialone.png",
        },
        {
            name: "Testimonial 2",
            photo: "/testimonialtwo.png",
        },
        {
            name: "Testimonial 3",
            photo: "/testimonialthree.png",
        },
    ];

    return (
        <div className="py-12">
            <h2 className="text-2xl font-bold text-center mb-10">Testimonials</h2>
            <div className="flex flex-col md:flex-row justify-around items-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`flex flex-col items-center bg-white shadow-md p-6 rounded-lg w-72 mb-6 md:mb-0 ${index === 1 ? "md:-mt-12" : ""}`}>
                        <img src={testimonial.photo} alt={testimonial.name} className="w-full h-64 object-cover rounded-lg"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
