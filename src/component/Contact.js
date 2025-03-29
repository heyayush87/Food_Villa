import React, { useState } from "react";

const contact = () => {
  return (
    <>
      <h1> Contact Page</h1>
      <form className="p-2 m-2 rounded-lg">
        <input
          type=""
          className=" m-2 p-2 border border-black"
          placeholder="name"
        ></input>
        <input
          type=""
          className=" m-2 p-2 border border-black"
          placeholder="message"
        ></input>
        <button className="border  border-black m-2 p-2 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default contact;
