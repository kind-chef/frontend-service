import { Route, Routes } from "react-router-dom";
import Login from "./Infrastructure/Pages/Login";
import KitchenDetail from "./Infrastructure/Pages/KitchenDetail";
import Kitchens from "./Infrastructure/Pages/Kitchens";
import RegisterKitchen from "./Infrastructure/Pages/RegisterKitchen";
import RegisterWorkshop from "./Infrastructure/Pages/RegisterWorkshop";

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
        <Route
          path="/register-kitchen"
          element={<RegisterKitchen></RegisterKitchen>}
        ></Route>
        <Route
          path="/register-workshop"
          element={<RegisterWorkshop></RegisterWorkshop>}
        />
      </Routes>
    </>
  );
}

export default App;
