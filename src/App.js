import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./HomePage/HomePage";
import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
