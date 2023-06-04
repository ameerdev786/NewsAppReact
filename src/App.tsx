import "./App.css";
import News from "./pages/News";
import {Route, Routes} from "react-router-dom";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/newsdetail" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
