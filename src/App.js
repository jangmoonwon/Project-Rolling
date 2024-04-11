import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessagePage } from "./pages/MessagePage";
import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PlayGround />}></Route>
        <Route path="/post/{id}/message" element={<MessagePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
