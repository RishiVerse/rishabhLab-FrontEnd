import React from "react";
import elearnImage from "../assets/elearn.jpeg"; // Adjust the path as necessary

function HomePage() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Welcome to rishabhLab.com
      </h1>
      <div>
        <img
          className="img-fluid"
          src={elearnImage}
          alt="Example"
          style={{ width: "auto", height: "600px" }}
        />
      </div>
    </div>
  );
}

export default HomePage;
