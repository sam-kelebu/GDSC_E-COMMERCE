import React from "react";
import { useHistory } from "react-router-dom";

const Gotoc = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/Cart");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>go to cart</button>
    </div>
  );
};

export default Gotoc;
