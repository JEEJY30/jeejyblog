/* eslint-disable react/no-unescaped-entities */


function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10 ">
      <div>
        <h1 className="text-7xl">JEEJY's Daily Blog</h1>
        <h2 className="mt-5">Welcome to {" "}
        <span className="underline decoration-4 decoration-[#f7ab0a]">
          Every Developers
        </span>{" "}
        favorite blog in the devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | The weekly debugging nightmares & more
      </p>
    </div>
  )
}

export default Banner