const stats = [
  { id: 1, name: 'Of commercial buildings use solar', value: '3.5%' },
  { id: 2, name: 'Growth over last decade', value: '12x' },
  { id: 3, name: 'Tax on energy sales', value: '0%' },
  { id: 4, name: 'Marketplace fee', value: '0%' },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leverage the Inflation Reduction Act
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
            It's your right to buy or sell your credits to get a financial edge in your business
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}