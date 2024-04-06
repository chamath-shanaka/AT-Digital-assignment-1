export default function Card_1() {
  return (
    <div
      className="grid md:grid-cols-3 s1200px:grid-cols-2 grid-rows-2 
                  md:grid-rows-1 max-w-1064 m-auto"
    >
      
      <div className="flex items-center justify-center">
        <div className="">
          <img
            src="../img/pc.png"
            alt="Web and Mobile App Development"
            className="s1200px:w-full s1200px:h-auto"
          />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center 
                    md:items-start md:col-span-2 s1200px:col-span-1 md:pr-5 md:pl-0 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4 font-Poppins  text-blueishPurple">
          Web & Mobile App Development
        </h2>
        <p className="mb-8 md:text-left text-center">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
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
