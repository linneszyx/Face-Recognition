import React from "react";
const FaceRecognise = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id='inputimage' src={imageUrl} alt="" width='500px' heigh='auto' />
      </div>
    </div>
  );
};
export default FaceRecognise;
