import windmill from "../assets/images/windmill.jpg"

export default function Hero() {
  return (
    <main className="bg-green-50">
      <div className="w-full max-w-7xl m-auto lg:flex justify-center lg:h-96">
        <div className="w-full py-12 text-center lg:py-24 lg:text-left lg:w-1/2">
          <div className="px-4 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Data to enrich your</span>{" "}
              <span className="block text-lime-600">online business</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="h-64 w-full sm:h-72 md:h-96 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={windmill}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
