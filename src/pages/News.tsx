import {useState} from "react";
import ShowNews from "../components/ShowNews";
import CountryFilter from "../components/CountryFilter";
import { useFetch } from "../hooks";
import { Data } from "../types";

const News = () => {
  // const [news, setNews] = useState<any[]>([]);
  // const [isLoading, setLoading] = useState<Boolean>(true);
  const [apiCountry, setCountryApi] = useState<String>(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=458ea16fb7a54950bfac47c1acf430f7"
  );
  const {news,isLoading}:Data =useFetch(apiCountry)
 
  // function for fetching latest news
  // const fetchMovies = async (apiCountry: String) => {
  //   try {
  //     setLoading(true);
  //     const result = await axios.get(
  //       `${apiCountry ? apiCountry : import.meta.env.VITE_API_URL}`
  //     );
  //     if (result?.data?.articles?.length > 0) {
  //       setNews(result?.data?.articles);
  //       setLoading(false);
  //       return {
  //         data: result?.data?.articles,
  //         isLoading: result?.data?.articles,
  //       };
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // effect for main component
  // useEffect(() => {
  //   fetchMovies(apiCountry);
  // }, [apiCountry]);

  return (
    <>
      <CountryFilter apiCountry={apiCountry} setCountryApi={setCountryApi}  />
      <ShowNews news={news} isLoading={isLoading} />
    </>
  );
};

export default News;
