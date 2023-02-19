import React from "react";
const FaceRecognise = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageUrl} alt="" width='300px' heigh='auto' />
      </div>
    </div>
  );
};
export default FaceRecognise;
