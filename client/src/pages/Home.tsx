import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageItem } from "../components/ImageBox";
import axios from "axios";

const Home = () => {
  const [bg, setBg] = useState<ImageItem>();

  const navigator = useNavigate();

  useEffect(() => {
    loadItems();
  }, []);

  const handleClick = () => {
    navigator("main");
  };

  const loadItems = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/backGround`);
      setBg(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (bg) {
    return (
      <div className="flex flex-col justify-between m-1">
        <div className="text-center text-xl mt-[7.3px] m-1">
          Welcome Image App!!
        </div>
        <div className="w-3/4 m-auto">
          <img
            className="w-full h-[700px] bg-center block m-auto rounded"
            src={`http://localhost:4000/${bg.imagePath}`}
            alt={bg.description}
          />
        </div>
        <button
          onClick={handleClick}
          className="m-auto block w-16 h-9 mt-3 font-bold border border-slate-400 rounded hover:text-slate-900 hover:bg-slate-100"
        >
          Go!
        </button>
      </div>
    );
  } else {
    return <div className="text-red-400">Please Page Refresh!!</div>;
  }
};

export default Home;
