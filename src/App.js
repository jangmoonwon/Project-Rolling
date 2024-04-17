import "styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, MessagePage, BackgroundPage, LinkPage } from "./pages";
import PlayGround from "./Playground";

import { ListPage } from "pages/ListPage/ListPage";
import { PostPage } from "./pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<LinkPage />} />
        <Route path="/post">
          <Route index element={<BackgroundPage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/message" element={<MessagePage />} />
        </Route>
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<BackgroundPage />} />

        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
