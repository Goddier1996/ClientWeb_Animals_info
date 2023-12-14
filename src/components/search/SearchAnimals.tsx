import { useState } from "react";
// import "font-awesome/css/font-awesome.min.css";


const SearchAnimals: React.FC<{ onChangeCallback: Function }> = ({
  onChangeCallback,
}) => {


  const [search, setSearch] = useState<string>("");


  const clearInputSearch = () => {
    setSearch("");
    onChangeCallback("");
  };



  const handleChange = (e: any) => {

    const inputValue = e.target.value;
    setSearch(inputValue);

    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeCallback && onChangeCallback(inputValue);
  };



  return (
    <>
      <div className="modelSearch">
        <form className="search-box">
          <input
            value={search}
            type="text"
            placeholder="Type to Search..."
            id="search"
            onChange={handleChange}
          />
          <button
            aria-label="Search animal"
            type="reset"
            onClick={clearInputSearch}
          ></button>
        </form>
      </div>
    </>
  );
};


export default SearchAnimals;