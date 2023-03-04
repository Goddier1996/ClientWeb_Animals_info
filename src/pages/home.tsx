import React from "react";
import AnimalsModals from "../components/showAnimals";


const Home: React.FC<{ query: string }> = ({ query }) => {

  return (
    <>
      {/* here you active all card animals and sound with compoment showAnimals */}
      <AnimalsModals query={query} />
    </>
  );
};

export default Home;