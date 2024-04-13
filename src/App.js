import "styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MessagePage } from "./pages/MessagePage/MessagePage";
import PlayGround from "./Playground";
import { LinkPage } from "pages/LinkPage/LinkPage";
import { PostPage } from "pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<LinkPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/{id}/message" element={<MessagePage />} />
        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
