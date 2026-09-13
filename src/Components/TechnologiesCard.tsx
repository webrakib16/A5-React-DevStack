import type { Itechnology } from "../Technologies Type/TechnologiesCardType";

interface ITechnologiesCardProps {
  technologies: Itechnology[];
  handleAddToStack: (technology: Itechnology) => void;
  selectedTechnologies: Itechnology[];
}

const TechnologiesCard = ({
  technologies,
  handleAddToStack,
  selectedTechnologies,
}: ITechnologiesCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {technologies.map((technology) => {

        let alreadyAdded = false;

        selectedTechnologies.map((item) => {
          if (item.id === technology.id) {
            alreadyAdded = true;
          }
        });

        return (
          <div
            key={technology.id}
            className="rounded-xl border border-sky-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Logo + Badge */}

            <div className="flex items-center justify-between">

              <img
                src={technology.logo}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />

              <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                {technology.badge}
              </span>

            </div>

            {/* Name */}

            <h2 className="mt-4 text-xl font-semibold">
              {technology.name}
            </h2>

            {/* Description */}

            <p className="mt-2 text-gray-500">
              {technology.description}
            </p>

            {/* Category + Level + Rating */}

            <div className="mt-5 flex items-center justify-between text-sm">

              <span>
                {technology.category}
              </span>

              <span>
                {technology.level}
              </span>

              <span>
                ⭐ {technology.rating}
              </span>

            </div>

            {/* Add To Stack */}

            <button
              onClick={() => handleAddToStack(technology)}
              disabled={alreadyAdded}
              className="mt-4 w-full rounded-lg bg-slate-900 py-3 text-white transition duration-300 hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {alreadyAdded
                ? "✓ Added to Stack"
                : "Add to Stack"}
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default TechnologiesCard;










// import type { Itechnology } from "../Technologies Type/TechnologiesCardType";

// interface ITechnologiesCardProps {
//   technologies: Itechnology[];
//   handleAddToStack: (technology: Itechnology) => void;
//   selectedTechnologies: Itechnology[];
// }

// const TechnologiesCard = ({
//   technologies,
//   handleAddToStack,
//   selectedTechnologies,
// }: ITechnologiesCardProps) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {technologies.map((technology) => {
//         const alreadyAdded = selectedTechnologies
//           .map((item) => {
//             return item.id === technology.id;
//           })
//           .includes(true);

//         return (
//           <div
//             key={technology.id}
//             className="rounded-xl border border-sky-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//           >
//             {/* Logo + Badge */}
//             <div className="flex items-center justify-between">
//               <img
//                 src={technology.logo}
//                 alt={technology.name}
//                 className="h-10 w-10 object-contain"
//               />

//               <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
//                 {technology.badge}
//               </span>
//             </div>

//             {/* Name */}
//             <h2 className="mt-4 text-xl font-semibold">{technology.name}</h2>

//             {/* Description */}
//             <p className="mt-2 text-gray-500">{technology.description}</p>

//             {/* Category + Level + Rating */}
//             <div className="mt-5 flex items-center justify-between text-sm">
//               <span>{technology.category}</span>

//               <span>{technology.level}</span>

//               <span>⭐ {technology.rating}</span>
//             </div>

//             {/* Button */}
//             <button
//               onClick={() => handleAddToStack(technology)}
//               disabled={alreadyAdded}
//               className="mt-4 w-full rounded-lg bg-slate-900 py-3 text-white transition duration-300 hover:bg-slate-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
//             >
//               {alreadyAdded ? "✓ Added to Stack" : "Add to Stack"}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default TechnologiesCard;
