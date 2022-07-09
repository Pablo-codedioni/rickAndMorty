import React from "react";

function Character({ cahracte }) {
  return (
    <div className="text-center p-5">
      <h3>{cahracte.name}</h3>
      <img className="img-fluid rounded-pill" src={cahracte.image} alt={cahracte.name} />
      <p>{cahracte.origin.name}</p>
    </div>
  );
}

export default Character;
