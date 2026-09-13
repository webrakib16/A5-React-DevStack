import Hero from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <section className="container mx-auto mt-24 ">
      <div className="flex justify-between items-center">

        {/* Left Text */}

        <div> 
          <h1 className="text-6xl font-bold">Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D8187E] to-[#7C3AED] bg-clip-text text-transparent">Development </span><br />
          <span className="bg-linear-to-r from-[#FF5722] to-[#D8187E] bg-clip-text text-transparent">Stack</span></h1>

          <p className="mt-6 text-xl">Explore frontend, backend, database, and tooling options,<br />
           compare them side by side, and put together the stack that fits your next <br />
           project.</p>
         
          <div className="mt-10  ">
            <button className="bg-linear-to-r from-[#FF5722] to-[#D8187E] text-white px-5 py-2 rounded-xl">Explore Technologies</button>
          <button className="border border-gray-300 px-8 py-2 rounded-lg ml-5">Learn More</button>
          </div>

        </div>

        
          {/* Right Image */}
          <div>
            <img src= {Hero} alt="" />
          </div>

      </div>
    </section>
  );
};

export default Banner;

