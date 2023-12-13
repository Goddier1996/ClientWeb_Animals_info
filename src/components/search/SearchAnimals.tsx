import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import Home from "../../pages/home";


const SearchAnimals: React.FC = () => {


  const [search, setSearch] = useState<string>("");

  
  const clearInputSearch = () => {
    setSearch("");
  };


  return (
    <>
      <div className="modelSearch">
        <form
          className="search-box"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Type to Search..."
            id="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button type="reset" onClick={clearInputSearch}></button>
        </form>
      </div>

      {/* send props input value Search */}
      <Home inputSearch={search} />
    </>
  );
};


export default SearchAnimals;