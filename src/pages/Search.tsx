import {useState, useEffect} from "react";
import CountryFilter from "../components/CountryFilter";
import {useFetch} from "../hooks";
import {Data} from "../types";
import ShowNews from "../components/ShowNews";

const Search = () => {
  const [inputKeyword, setInput] = useState<string>("");
  const [isAllow, setIsAllow] = useState<Boolean>(false);
  const [apiCountry, setCountryApi] = useState<String>(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=b7f74456954b427d83dba732a56f87d5`
  );
  var {news, isLoading}: Data = useFetch(apiCountry, inputKeyword, isAllow);
  console.log(inputKeyword, "inputKeyword");

  useEffect(() => {
    setCountryApi("");
  }, []);

  return (
    <>
      <CountryFilter
        apiCountry={apiCountry}
        setCountryApi={setCountryApi}
        setInput={setInput}
      />
      <div className="w-full flex items-center justify-center">
        <input
          type="text"
          onChange={(e: any) => setInput(e.target.value)}
          value={inputKeyword}
          className="border-2 h-12 border-gray-500 w-1/4 py-2 rounded-md px-2 font-md"
          placeholder={`Search Top news from ${
            apiCountry?.includes("us") ? "United State" : "Great Britain"
          }`}
        />
        <button
          onClick={() => {
            setIsAllow(!isAllow);
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
