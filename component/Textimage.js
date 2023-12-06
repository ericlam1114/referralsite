import { BoltIcon, BanknotesIcon, BookOpenIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Sell Energy Credits',
    description:
      'The IRA mechanism permits owners of for-profit projects to convert specific tax credits into monetary value by transferring them to other taxpayers.',
    icon: BoltIcon,
  },
  {
    name: '100% Tax Free',
    description: 'The inflation reduction act specifies that the sale of energy credits in exchange for cash, are cash free sales.',
    icon: BanknotesIcon,
  },
  {
    name: 'Brand New Legislation',
    description: 'The direct pay process enables entities exempt from income tax, including nonprofits, state/local/Tribal governments, publicly owned utilities, and rural electric cooperatives, to claim a direct payment from the IRS equivalent to the tax credit amount. ',
    icon: BookOpenIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 id="target-about" className=" text-4xl font-semibold leading-7 text-black">How It Works</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-black">
              Our mission is to help perpetuate a clean energy future. After the introduction of the Inflation Reduction Act, where the ability to buy and sell energy credits became permitted, there interestingly was no way to easily buy or sell those  energy credits. Thus in order to close the gap in the market, we scaffolded the marketplace.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-black">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-black" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/solarimage.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}