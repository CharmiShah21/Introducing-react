import React from "react";

function Greeting({ name }) {
    return (
      <div className="greeting-container">
          <h2 className="greeting">
              Hello, {name} Wishing you a day full of smiles!!
          </h2>
       </div>
    )
  }
  export default Greeting;
