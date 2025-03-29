import React, { useRef } from "react";

// function UncontrolledForm() {
//   const nameInput = useRef(null); // Reference to the input element

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Submitted Name: ${nameInput.current.value}`); // Access the value directly from the DOM
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           ref={nameInput} // Input is uncontrolled, no React state is involved
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
const Grocery = () => {
  // const nameInput = useRef(null); // Reference to the input element

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`Submitted Name: ${nameInput.current.value}`); // Access the value directly from the DOM
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Name:
    //     <input
    //       type="text"
    //       ref={nameInput} // Input is uncontrolled, no React state is involved
    //     />
    //   </label>
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <p> Grocery </p>
    </>
  );
};

export default Grocery;
