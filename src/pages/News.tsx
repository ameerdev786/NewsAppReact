import {useState} from "react";
import ShowNews from "../components/ShowNews";
import CountryFilter from "../components/CountryFilter";
import { useFetch } from "../hooks";
import { Data } from "../types";

const News = () => {
  // const [news, setNews] = useState<any[]>([]);
  // const [isLoading, setLoading] = useState<Boolean>(true);
  const [apiCountry, setCountryApi] = useState<String>(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b7f74456954b427d83dba732a56f87d5"
  ); 
  const {news,isLoading}:Data =useFetch(apiCountry,'',false)
 
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
      <CountryFilter
        apiCountry={apiCountry}
        setCountryApi={setCountryApi}
      />
      <ShowNews news={news} isLoading={isLoading} />
    </>
  );
};

export default News;
