import { use, useState } from "react";
import type { Itechnology } from "../Technologies Type/TechnologiesCardType";
import TechnologiesCard from "./TechnologiesCard";
import YourStack from "./YourStack";

interface technologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Itechnology[]
  >([]);

  // Add to Stack
  const handleAddToStack = (technology: Itechnology) => {
    if (selectedTechnologies.includes(technology)) {
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
  };

  // Remove one technology
  const handleRemove = (technology: Itechnology) => {
    const newSelectedTechnologies: Itechnology[] = [];

    selectedTechnologies.map((item) => {
      if (item !== technology) {
        newSelectedTechnologies.push(item);
      }
    });

    setSelectedTechnologies(newSelectedTechnologies);
  };

  // Remove all
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="container mx-auto mt-24">
      <h1 className="text-5xl font-bold">
        Explore the
        <span className="text-[#D8187E]"> Technologies</span>
      </h1>

      <p className="text-gray-500 mt-2 text-[22px]">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        <div className="lg:col-span-3">
          <TechnologiesCard
            technologies={technologies}
            handleAddToStack={handleAddToStack}
            selectedTechnologies={selectedTechnologies}
          />
        </div>

        <div>
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

// import { use } from 'react';
// import type { Itechnology } from '../Technologies Type/TechnologiesCardType';
// import TechnologiesCard from './TechnologiesCard';

// interface technologiesProps {
//     technologiesPromise : Promise<Itechnology []>

// }

// const Technologies = ({technologiesPromise}:technologiesProps) => {
//     console.log(technologiesPromise)
//     const technologies = use(technologiesPromise)
//     console.log(technologies,"technologiesPromise")
//     return (
//         <div className='container mx-auto mt-24'>
//             <h1 className='text-5xl font-bold'>Explore the <span className='text-[#D8187E]'>Technologies</span></h1>
//             <p className=' text-gray-500 mt-2 text-[22px]'>Pick one technology per category to build your ideal stack.</p>

//             <TechnologiesCard technologies = {technologies}/>

//         </div>
//     );
// };

// export default Technologies;
