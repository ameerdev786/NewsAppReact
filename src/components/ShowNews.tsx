import {useNavigate} from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import {newsData} from "../types";
// interface newsData {
//   urlToImage: string;
//   title: String;
//   description: String;
//   publishedAt: String;
// }
const ShowNews = ({news, isLoading}: any) => {
  const navigate = useNavigate();
  return (
    <>
      {!isLoading ? (
        <div className=" w-full  grid grid-cols-4 gap-6   px-24 shadow-md p-4">
          {news?.map((news: newsData) => (
            <div className=" bg-gray-100 p-6 cursor-pointer hover:bg-gray-200 hover:rounded-2xl hover:scale-110 transition ease-in-out delay-110 text-center flex flex-col justify-evenly space-y-4">
              <h1 className="font-bold">{news.title.slice(0, 60)}</h1>
              <img
                onClick={() => {
                  navigate("/newsdetail", {state: news});
                }}
                src={news.urlToImage}
                alt="News image"
                className="w-full h-[60%] rounded-xl  "
              />
              <h2>{news?.description}</h2>
              <button
                className="bg-red-800 py-1 text-white w-[50%] rounded-full mx-auto hover:bg-red-600"
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
