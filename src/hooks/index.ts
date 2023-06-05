import {useEffect, useState} from "react";
import axios from "axios";

// function for fetching latest news
export const useFetch = (apiCountry: String, q?: String) => {
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(true);
  console.log(apiCountry.concat(`&q=${q == undefined ? "it" : q}`), "pppo");

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${
          apiCountry
            ? apiCountry && q
              ? apiCountry.concat(`&q=${q}`)
              : apiCountry
            : import.meta.env.VITE_API_URL
        }`
      );
      if (result?.data?.articles?.length > 0) {
        setNews(result?.data?.articles);
        setLoading(false);
      } else {
        setNews(result?.data?.articles);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiCountry]);
  return {news, isLoading};
};
