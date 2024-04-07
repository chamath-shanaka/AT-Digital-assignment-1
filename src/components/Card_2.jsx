import magnifierImg from "../../img/magnifier.png";

export default function Card_2() {
  return (
    <div
      className="grid md:grid-cols-3 s1200px:grid-cols-2 grid-rows-2 
                  md:grid-rows-1 max-w-1064 m-auto"
    >

      <div className="flex items-center justify-center md:order-last ">
        <div className="">
          <img
            src={magnifierImg}
            alt="Digital Strategy Consulting"
            className="s1200px:w-full s1200px:h-auto"
          />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center md:items-start 
                    md:order-first md:col-span-2 s1200px:col-span-1 md:pr-5 md:pl-20 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4 font-Poppins text-blueishPurple">
          Digital Strategy Consulting
        </h2>
        <p className="mb-8 md:text-left text-center">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <button
          type="button"
          className="mt-5 bg-yuzuJam py-2 px-5 rounded-md text-white"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}
