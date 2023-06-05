import {useEffect, useState} from "react";
import axios from "axios";

// function for fetching latest news
export const useFetch = (apiCountry: String, q?: String, isAllow?: Boolean) => {
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(true);
  console.log(
    isAllow,
    "ppmmmmmmmmmmmm",
  q,
    "pp"
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${
          apiCountry &&q
            ? apiCountry.concat(`&q=${q}`)
            : import.meta.env.VITE_API_URL
        }`
      );
      if (result?.data?.articles?.length > 0) {
        setNews(result?.data?.articles);
        setLoading(false);
      }else{
        setNews([])
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiCountry, isAllow]);
  return {news, isLoading};
};
