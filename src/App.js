import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MessagePage } from "./pages/MessagePage/MessagePage";
import { BackgroundPage } from "pages/BackgroundPage/BackgroundPage";
import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/{id}/message" element={<MessagePage />} />
        <Route path="/post" element={<BackgroundPage />}></Route>
        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
