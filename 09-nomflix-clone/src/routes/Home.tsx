import React from 'react';
import {useQuery} from "react-query";
import {getMovies} from "../api";

const Home = () => {
  const {data, isLoading} = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(`-> data, isLoading`, data, isLoading);
  return (
    <div style={{backgroundColor: "whitesmoke", height: "200vh"}}/>
  );
};

export default Home;
