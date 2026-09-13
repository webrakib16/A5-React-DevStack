import image from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto mt-24 px-4 md:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start border-t border-gray-200 pt-10">
      
      {/* Footer-Left */}

      <div>
        <img src={image} alt="" />
        <p className="mt-4">
          Curated tools, technologies, and resources for developers building{" "}
          <br className="hidden lg:block" />
          modern software.
        </p>

        <ul className="flex gap-4 mt-3 items-center font-semibold">
          <li>Github</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
      </div>

      {/* Footer-Middile-1 */}

      <div>
        <h2 className="font-bold">PRODUCT</h2>

        <ul className="mt-5 space-y-3 text-[#94A3B8]">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
        </ul>
      </div>

      {/* Footer-Middile-2 */}

      <div>
        <h2 className="font-bold">COMPANY</h2>

        <ul className="mt-5 space-y-3 text-[#94A3B8]">
          <li>About</li>
          <li>Contact</li>
          <li>careers</li>
        </ul>
      </div>

      {/* Footer-Right */}

      <div>
        <h2 className="font-bold">LEGAL</h2>

        <ul className="mt-5 space-y-3 text-[#94A3B8]">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-18 mb-12 flex flex-col md:flex-row justify-between items-center text-[#94A3B8] border-t border-gray-200 pt-6">
      </div>


      
      {/* Footer-Bottom */}

      <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-12 mb-12 flex flex-col md:flex-row justify-between items-center text-[#94A3B8] gap-3">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>

        <p>Privacy &nbsp;&nbsp; Terms</p>
      </div>
      
    </div>
  );
};

export default Footer;



