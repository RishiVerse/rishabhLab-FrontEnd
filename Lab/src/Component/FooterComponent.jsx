import React from "react";

function FooterComponent() {
  return (
    <div
      className="card-footer text-body-secondary"
      style={{ paddingTop: "30px", textAlign: "center", paddingBottom: "20px" }}
    >
      <span>All rights reserved 2024</span>
      <span> | Category:</span> Science
      <span> | Author:</span> John Doe
      <span> | Views:</span> 1000
      <span> | Likes:</span> 50
    </div>
  );
}

export default FooterComponent;
