interface filterProps {
  setCountryApi: any;
  apiCountry: String;
  setInput?:any;
}
const CountryFilter = ({setCountryApi, apiCountry, setInput}: filterProps) => {
  return (
    <div className="w-11/12  mx-auto px-24 py-4 flex items-center  justify-between">
      <div className="space-x-6">
        <button className="bg-red-800 text-white px-2 rounded-md px-5 py-2 hover:bg-red-700">
          <h1>Top News </h1>
        </button>
        <span className="font-bold text-xl">
          from {apiCountry?.includes("us") ? " United State" : "Great Britain"}
        </span>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => {
            setCountryApi(
              "https://newsapi.org/v2/top-headlines?country=gb&apiKey=b7f74456954b427d83dba732a56f87d5"
            )
            setInput('')
          }}
          type="button"
          className="text-white w-16 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
        >
          GB
        </button>
        <button
          onClick={() => {
            setCountryApi(
              "https://newsapi.org/v2/top-headlines?country=us&apiKey=b7f74456954b427d83dba732a56f87d5"
            );
            setInput('')
          }}
          type="button"
          className="text-white w-16 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
        >
          US
        </button>
      </div>
    </div>
  );
};

export default CountryFilter;
