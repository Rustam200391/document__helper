import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { QPage } from "./pages/questionPage/questionPage";
import { MPage } from "./pages/mainPage/mainPage";
import { CollectionPage } from "./pages/collectDocPage/collectionPage";
import "../src/styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/mainpage" element={<MPage />} />
            <Route path="/" element={<Login />} />

            <Route path="/qpage" element={<QPage />} />
            <Route path="/collectionPage" element={<CollectionPage />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
