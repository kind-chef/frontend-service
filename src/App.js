import { Route, Routes } from "react-router-dom";
import Login from "./Infrastructure/Pages/Login";
import KitchenDetail from "./Infrastructure/Pages/KitchenDetail";
import Kitchens from "./Infrastructure/Pages/Kitchens";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login></Login>}></Route>
        <Route path="/kitchens" exact element={<Kitchens></Kitchens>}></Route>
        <Route
          path="/kitchens/:kitchenId"
          element={<KitchenDetail></KitchenDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
