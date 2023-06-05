import {useLocation,Link} from "react-router-dom";
import {newsData} from "../types";
import {FaArrowLeft} from "react-icons/fa"
const NewsDetail = () => {
  const data: newsData = useLocation().state;
  return (
    <>
      <div className="w-11/12 h-screen flex items-center justify-center flex-col   py-10  space-x-10  mx-auto">
        <h1 className="font-bold text-xl">{data?.title}</h1>
        <img
          src={data?.urlToImage}
          alt="News image"
          className="w-1/2   rounded-xl  "
        />
        <p className="text-center">{data?.publishedAt}</p>
        <div className=" w-1/2">
          {/* {data?.description && (
            <>
              <h1 className="font-bold text-xl"> Description</h1>
              <p> {data?.description}</p>
            </>
          )} */}
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
          <Link
            to="/"
            className=" flex items-center justify-center px-6 py-2 text-red-500 font-bold rounded-md"
          >
            <span>
              <FaArrowLeft />
            </span>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
