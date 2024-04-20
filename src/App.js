import "styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  MessagePage,
  BackgroundPage,
  ListPage,
  EditPage,
} from "./pages";
import PlayGround from "./Playground";

import { PostPage } from "./pages/PostPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post">
          <Route index element={<BackgroundPage />} />
          <Route path=":id" element={<PostPage />} />
          <Route path=":id/message" element={<MessagePage />} />
          <Route path=":id/edit" element={<EditPage />} />
        </Route>
        <Route path="*" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
