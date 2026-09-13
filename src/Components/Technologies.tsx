import { use, useState } from "react";
import type { Itechnology } from "../Technologies Type/TechnologiesCardType";
import TechnologiesCard from "./TechnologiesCard";
import YourStack from "./YourStack";

import { ToastContainer, toast } from "react-toastify";


interface technologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState< Itechnology[]>([]);

  // Add To Stack
  const handleAddToStack = (technology: Itechnology) => {
    let alreadyAdded = false;

    selectedTechnologies.map((item) => {
      if (item.id === technology.id) {
        alreadyAdded = true;
      }
    });

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return false;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack`);
    return true;
  };

  // Remove
  const handleRemove = (technology: Itechnology): boolean => {
    const newSelectedTechnologies: Itechnology[] = [];

    selectedTechnologies.map((item) => {
      if (item.id !== technology.id) {
        newSelectedTechnologies.push(item);
      }
    });

    setSelectedTechnologies(newSelectedTechnologies);

    toast.success(`${technology.name} removed from your stack`);
    return true;
  };

  // Remove All
  const handleRemoveAll = (): boolean => {
    setSelectedTechnologies([]);

    toast.success("All technologies removed");
    return true;
  };

  return (
    <div className="container mx-auto mt-24">
      {/* Heading */}

      <h1 className="text-5xl font-bold">
        Explore the <span className="text-[#D8187E]">Technologies</span>
      </h1>

      <p className="text-gray-500 mt-2 text-[22px]">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* Technologies + Your Stack */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        {/* Technologies */}

        <div className="lg:col-span-3">
          <TechnologiesCard
            technologies={technologies}
            handleAddToStack={handleAddToStack}
            selectedTechnologies={selectedTechnologies}
          />
        </div>

        {/* Your Stack */}

        <div>
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>

      {/* Toast */}

      <ToastContainer />
    </div>
  );
};

export default Technologies;

