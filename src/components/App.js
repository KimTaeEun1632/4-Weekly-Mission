import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "../pages/shared/shared";
import Nav from "./common/nav/Nav";
import Foot from "./common/foot/Foot";
import Folder from "../pages/folder/folder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
