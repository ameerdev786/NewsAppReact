import {useState} from "react";
import CountryFilter from "../components/CountryFilter";
import {useFetch} from "../hooks";
import {Data} from "../types";
import ShowNews from "../components/ShowNews";

const Search = () => {
  const [inputKeyword, setInput] = useState<String>("it");
  const [isAllow, setIsAllow] = useState<Boolean>(false);
  const [apiCountry, setCountryApi] = useState<String>(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=458ea16fb7a54950bfac47c1acf430f7`
  );
  var {news, isLoading}: Data = useFetch(apiCountry, isAllow ? inputKeyword:undefined);

  // useEffect(() => {
  //   setCountryApi(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=458ea16fb7a54950bfac47c1acf430f7&q=${inputKeyword}`
  //   );
  // }, [inputKeyword]);

  return (
    <>
      <CountryFilter apiCountry={apiCountry} setCountryApi={setCountryApi} />
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          onChange={(e: any) => {
            setInput(e.target.value);
          }}
          className="border-2 h-12 border-gray-500 w-1/4 py-2 rounded-md px-2 font-md"
          placeholder={`Search Top news from ${
            apiCountry?.includes("us") ? "United State" : "Great Britain"
          }`}
        />
        <button
          onClick={() => {
            setIsAllow(true);
          }}
          className="h-12  rounded-md px-3 bg-red-700 text-white"
        >
          Search
        </button>
      </div>
      <ShowNews news={news} isLoading={isLoading} />
    </>
  );
};

export default Search;
