import React from "react";
function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="images" />
    </div>
  );
}
export default Card;
