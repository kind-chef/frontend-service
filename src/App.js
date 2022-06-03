import { Route, Routes } from "react-router-dom";
import Login from "./Infrastructure/Pages/Login";
import Workshops from "./Infrastructure/Pages/Workshops";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login></Login>}></Route>
        <Route path="/workshops" element={<Workshops></Workshops>}></Route>
      </Routes>
    </>
  );
}

export default App;
