import {useNavigate} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import { newsData } from "../types";
// interface newsData {
//   urlToImage: string;
//   title: String;
//   description: String;
//   publishedAt: String;
// }
const ShowNews = ({data, isLoading}: any) => {
  const navigate = useNavigate();
  return (
    <>
      {!isLoading ? (
        <div className=" w-full  grid grid-cols-4 gap-6  px-24 shadow-md p-4">
          {data?.map((news: newsData) => (
            <div className=" bg-gray-100 p-6 hover:bg-gray-200 hover:rounded-2xl hover:scale-110 transition ease-in-out delay-110 text-center flex flex-col justify-evenly space-y-4">
              <img
                src={news.urlToImage}
                alt="News image"
                className="w-full h-[60%] rounded-xl  "
              />
              <h1>{news.title.slice(0, 60)}</h1>
              <button
                className="bg-gray-500 text-white w-[50%] rounded-full mx-auto"
                onClick={() => {
                  navigate("/newsdetail", {state: news});
                }}
              >
                Get More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default ShowNews;
