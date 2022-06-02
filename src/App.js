import { Route, Routes } from "react-router-dom";
import Login from "./Infrastructure/Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
