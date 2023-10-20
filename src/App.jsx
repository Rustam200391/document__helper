import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { QPage } from "./pages/questionPage/questionPage";
import "../src/styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/qpage" element={<QPage />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
