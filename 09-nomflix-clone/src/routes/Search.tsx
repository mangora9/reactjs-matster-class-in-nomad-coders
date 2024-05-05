import React from 'react';
import {useLocation} from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(`-> keyword`, keyword);
  return null;
};


export default Home;
