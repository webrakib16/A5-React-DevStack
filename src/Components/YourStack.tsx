import type { Itechnology } from "../Technologies Type/TechnologiesCardType";

interface YourStackProps {
  selectedTechnologies: Itechnology[];
  handleRemove: (technology: Itechnology) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Heading */}
      <h2 className="text-2xl font-bold">
        Your Stack
      </h2>

      {/* Selected Count */}
      <p className="mt-1 text-gray-400">
        {selectedTechnologies.length} Technology Selected
      </p>


      {/* Conditional Rendering */}
      {selectedTechnologies.length === 0 ? (

        <div className="py-20 text-center">

          <p className="text-gray-400">
            Your stack is empty.
          </p>

        </div>

      ) : (

        <div className="mt-5">

          {/* Selected Technologies */}
          {selectedTechnologies.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center justify-between border-b border-gray-100 py-4"
            >

              <div className="flex items-center gap-3">

                <img
                  src={technology.logo}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div>

                  <h3 className="font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {technology.category}
                  </p>

                </div>

              </div>


              {/* Remove */}
              <button
                onClick={() => handleRemove(technology)}
                className="text-xl text-gray-400 hover:text-red-500"
              >
                ✕
              </button>

            </div>

          ))}


          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2 text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>

        </div>

      )}

    </div>
  );
};

export default YourStack;