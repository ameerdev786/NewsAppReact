import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import axios from "axios";
import ShowNews from "../components/ShowNews";

const News = () => {
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(true);
  // function for fetching latest news
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`${import.meta.env.VITE_API_URL}`);
      if (result?.data?.articles?.length > 0) {
        setNews(result?.data?.articles);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // effect for main component
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <ShowNews data={news} isLoading={isLoading} />
    </>
  );
};

export default News;
