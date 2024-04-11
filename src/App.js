import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PlayGround />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
