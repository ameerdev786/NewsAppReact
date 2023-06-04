import {useLocation} from "react-router-dom";
import {newsData} from "../types";
const NewsDetail = () => {
  const data: newsData = useLocation().state;
  return (
    <>
      <div className="w-full pt-4 text-center">
        <h1 className="font-bold text-xl">{data?.title}</h1>
      </div>
      <div className="w-11/12 h-screen flex items-start py-10 justify-between space-x-10  mx-auto">
        <div className="w-full h-full">
          <img
            src={data?.urlToImage}
            alt="News image"
            className="w-full  rounded-xl  "
          />
          <p className="text-center">{data?.publishedAt}</p>
        </div>
        <div className="">
          {data?.description && (
            <>
              <h1 className="font-bold text-xl"> Description</h1>
              <p> {data?.description}</p>
            </>
          )}
          {data.content && (
            <>
              <h1 className="font-bold text-xl"> Content</h1>
              <p> {data?.content}</p>
            </>
          )}
          {data?.author && (
            <>
              <h1 className="font-bold text-xl"> Author</h1>
              <p> {data?.author}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
