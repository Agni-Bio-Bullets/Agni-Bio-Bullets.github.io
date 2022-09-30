/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Contact Us', href: '#' },
]

export default function Header() {
  return (
    <header className="bg-lime-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-center lg:justify-between border-b border-lime-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Agni Bio Bullets</span>
              {/* <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Agni Bio Bullets" /> */}
              <h1 className="text-white text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">AGNI BIO BULLETS</h1>
            </a>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-medium text-white hover:text-lime-100 hover:font-semibold">
                  {link.name}
                </a>
              ))}
            </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-white hover:text-lime-100 hover:font-semibold">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}


// function Header() {
//   return (
//     <div className="w-full h-24 bg-lime-600">
//       <div>Agni Bio Bullets</div>
//       <nav>
//         <div>Home</div>
//         <div>Products</div>
//         <div>Contact</div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
