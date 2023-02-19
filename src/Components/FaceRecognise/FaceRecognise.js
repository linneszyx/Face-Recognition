import React from "react";
import "./FaceRecognise.css";
const FaceRecognise = ({ imageUrl,box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id='inputimage' 
        src={imageUrl} 
        alt="" 
        width='500px' 
        height='auto' 
        />
        <div className="bounding-box">

        </div>
      </div>
    </div>
  );
};
export default FaceRecognise;
