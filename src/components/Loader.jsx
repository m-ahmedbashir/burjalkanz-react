import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loader.css"; // Import your custom styles for the loader

const Loader = ({ color }) => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <BeatLoader
          color={`${color || "#36d7b7"}`}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
