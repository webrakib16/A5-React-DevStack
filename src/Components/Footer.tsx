import image from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto mt-24 grid grid-cols-4 items-start border-t border-gray-200 pt-10">
      
      {/* Footer-Left */}

      <div>
        <img src={image} alt="" />
        <p>
          Curated tools, technologies, and resources for developers building{" "}
          <br />
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

      {/* Footer-Bottom */}

      <div className="col-span-4 mt-12 mb-12 flex justify-between items-center text-[#94A3B8]">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>

        <p>Privacy &nbsp;&nbsp; Terms</p>
      </div>
    </div>
  );
};

export default Footer;








// import image from "../assets/logo-text.png";

// const Footer = () => {
//   return (
//     <div className="container mx-auto mt-24 grid grid-cols-4 items-center border-t-border-gray-200">
//         {/* Footer-Left */}

//       <div>
//         <img src={image} alt="" />
//         <p>
//           Curated tools, technologies, and resources for developers building{" "}
//           <br />
//           modern software.
//         </p>
//         <ul className="flex gap-4 mt-3 items-center font-semibold ">
//             <li>Github</li>
//             <li>Twitter</li>
//             <li>Linkedin</li>
//         </ul>
//       </div>
      
//       {/* Footer-Middile-1 */}
//       <div>
//         <h2 className="font-bold">PRODUCT</h2>
//         <ul className="mt-5 space-y-3">
//             <li>Home</li>
//             <li>Technologies</li>
//             <li>Projects</li>
//         </ul>
//       </div>

//       {/* Footer-Middile-2 */}

//       <div>
//         <h2 className="font-bold">COMPANY</h2>
//         <ul className="mt-5 space-y-3">
//             <li>About</li>
//             <li>Contact</li>
//             <li>careers</li>
//         </ul>
//       </div>

//       {/* Footer-Right */}

//        <div>
//         <h2 className="font-bold">LEGAL</h2>
//         <ul className="mt-5 space-y-3">
//             <li>Privacy Policy</li>
//             <li>Terms of Service</li>
            
//         </ul>
//       </div>

//       {/* Footer-Bottom */}

//       <div className="flex justify-between items-center">
//         <p className="">&copy; 2026 dev Stack. All rights reserved.</p>
//         <p>Privacy Terms</p>
//       </div>




//     </div>
//   );
// };

// export default Footer;
