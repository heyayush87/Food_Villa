import React, { useState } from "react";

// controlled components

const contact = () => {
  const [name, setname] = useState("");

  const handlechange = (event) => {
    setname(event.target.value);
  };
  const handleclicked = (event) => {
    event.preventDefault();
    alert(`Name, ${name}`);
  };

  return (
    <form onSubmit={handleclicked}>
      <label>
        Name:
        <input
          className=" shadow-lg p-2 bg-slate-100"
          type="text"
          placeholder="type something"
          value={name}
          onChange={handlechange}
        ></input>
      </label>

      <button type="submit"> Submit</button>
    </form>
  );
};

export default contact;
