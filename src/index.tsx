import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/Home";
import Details from "pages/details/Details";
import BasicLayout from "BasicLayout";
import "utils/sass/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* This version of React Router doesn't support array of paths or contidional params */}
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path={":lang"} element={<Home />} />
          <Route path={`details/:section`} element={<Details />} />
          <Route path={`details/:section/:lang`} element={<Details />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
