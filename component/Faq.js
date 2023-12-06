const faqs = [
    {
      id: 1,
      question: "How does the Inflation Reduction Act impact commercial solar energy investment?",
      answer:
        "The Inflation Reduction Act expands opportunities for the commercial investment tax credit for solar energy, reducing barriers to developing large-scale clean energy projects. This change enhances the economic feasibility and attractiveness of investing in solar energy.",
    },
    {
      id: 2,
      question: "What were the challenges with solar tax credit utilization in the past?",
      answer:
        "Previously, developers who couldn't use the federal income tax credits themselves faced challenges, as they couldn't sell these credits outright. This led to the creation of complex tax structures involving equity investors to utilize the credits.",
    },
    {
      id: 3,
      question: "How has the new tax law changed the transferability of solar tax credits?",
      answer:
        "Under the new tax law, solar tax credits can now be sold once by the developer. This allows for new cash equity into the project without altering the ownership structure, simplifying the process significantly.",
    },
    {
      id: 4,
      question: "What guidance has the IRS released regarding renewable energy credits?",
      answer:
        "The IRS has released guidance under proposed rules (REG-101610-23) detailing the nuances of transferring renewable energy credits, providing clarity on the process and requirements.",
    },
    {
      id: 5,
      question: "What are the tax consequences of transferring solar tax credits?",
      answer:
        "When transferring solar tax credits, the cash received is treated as tax-exempt income for the seller, while the cash paid by the buyer is a nondeductible expense. It's crucial to understand the one-time sale limitation and its impacts.",
    },
    {
      id: 6,
      question: "What factors should buyers consider before purchasing solar tax credits?",
      answer:
        "Buyers should verify their ability to use the credits and compare the market price of the credit to potential cash savings. They must also ensure due diligence to confirm the credits meet eligibility standards and understand the liability for recapture of ineligible credits.",
    },
    {
      id: 7,
      question: "What considerations should sellers have before marketing their credits?",
      answer:
        "Sellers need to assess their eligibility for the credit amount and their capacity to utilize them. They should consider additional costs like indemnifications and insurance, which might affect the economic benefit of selling the credits.",
    },
    {
      id: 8,
      question: "Is it possible for a developer to use only a portion of the tax credits and sell the remainder?",
      answer:
        "Yes, developers can sell a partial amount of the tax credits, provided it is a vertical slice and not solely from a bonus/adder credit. This allows them to benefit from the credits they can use while selling the rest.",
    },
    {
      id: 9,
      question: "What are the key benefits of the new solar tax credit transferability under the Inflation Reduction Act?",
      answer:
        "The new transferability rules simplify the process for developers to monetize credits, increase the liquidity of these credits in the market, and potentially attract more investment into solar energy projects.",
    },
    {
      id: 10,
      question: "What risks do buyers and sellers face in the transfer of solar tax credits?",
      answer:
        "Buyers risk the recapture of ineligible credits, while sellers must be cautious about the accurate valuation and eligibility of their credits. Both parties face potential financial and compliance risks in these transactions.",
    },
    // More questions...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }