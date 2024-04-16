import "styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, MessagePage, BackgroundPage, LinkPage } from "./pages";
import PlayGround from "./Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<LinkPage />} />
        <Route path="/post">
          <Route index element={<BackgroundPage />} />
          <Route path=":postId/message" element={<MessagePage />} />
        </Route>

        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
