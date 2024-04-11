import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlayGround from "./Playground";
import Develop from "./Develop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PlayGround />}></Route>
        <Route path="/develop" element={<Develop />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
