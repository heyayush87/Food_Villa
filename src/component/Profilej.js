import { useState, useEffect } from "react";
const Profilej = (props) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // console.log("1st useEffect");

    const timer = setInterval(() => {
      // console.log("namaste");
    }, 1000);

    console.log("2nd useEffect");
    return () => {
      clearInterval(timer);
      // console.log(" clear useEffect inside return func");
    };
  }, []);

  // console.log("render");

  return (
    <>
      <h1> profile component</h1>
      <h2>{props.name}</h2>
      <h1> count:{count}</h1>
      <button
        onClick={() => {
          setcount(1);
        }}
      >
        {" "}
        Button
      </button>
    </>
  );
};

export default Profilej;
