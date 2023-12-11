import AnimalsModals from "../components/animals/showAnimals/ShowAnimals";


// Home give value from SearchAnimals component !
const Home: React.FC<{ inputSearch: string }> = ({ inputSearch }) => {

  return (
    <>
      {/* here active show all Animals */}
      <AnimalsModals Search={inputSearch} />
    </>
  );
};


export default Home;