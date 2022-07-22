

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import useFetch from "./customHooks/useFetch";

const Home = () => {
  //using custom hook 'useFetch'
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;