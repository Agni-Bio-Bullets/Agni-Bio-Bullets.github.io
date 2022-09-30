import pelletPlant from "../assets/images/plant_in_pellet.jpg";

const items = [
  {
    name: "Product A",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product B",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product C",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product D",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product E",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product F",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
  {
    name: "Product G",
    href: "#",
    description: "All the basics for starting a new business",
    productImage: pelletPlant,
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Our products</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Lorem imsum dolor sit amet. Lorem imsum dolor sit amet lorem imsum dolor sit amet.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{item.name}</h2>
                <div className="p-4">
                  <img src={item.productImage} alt="Product" />
                </div>
                <p className="mt-4 text-sm text-gray-500">{item.description}</p>
              </div>
              {/* <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
