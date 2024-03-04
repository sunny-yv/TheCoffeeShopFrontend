import React from "react";
import "./style.css";
import ReadCat from "../../components/ReadCat";
import CreateCat from "../../components/CreateCat";

import { BrowserRouter as Router, Route } from "react-router-dom";
function Manager() {
  return (
    <div className="manager">
      <div>
        <h3>React Crud Operations</h3>
      </div>

      <div>
        <CreateCat />
      </div>

      <div style={{ marginTop: "30px" }}>
        <ReadCat />
      </div>

      
    </div>
  );
}

export default Manager;
