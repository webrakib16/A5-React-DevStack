import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/nav";
import Technologies from "./Components/Technologies";
import type { Itechnology } from "./Technologies Type/TechnologiesCardType";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...Please Wait</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
