import { Route, Routes } from "react-router-dom";
import Login from "./Infrastructure/Pages/Login";
import KitchenDetail from "./Infrastructure/Pages/KitchenDetail";
import Kitchens from "./Infrastructure/Pages/Kitchens";
import RegisterKitchen from "./Infrastructure/Pages/RegisterKitchen";
import RegisterWorkshop from "./Infrastructure/Pages/RegisterWorkshop";
import UnassignedWorkshops from "./Infrastructure/Pages/UnassignedWorkshops";
import WorkshopDetail from "./Infrastructure/Pages/WorkshopDetail";
import Workshops from "./Infrastructure/Pages/Workshops";
import ActiveWorkshopDetail from "./Infrastructure/Pages/ActiveWorkshopDetail";
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
        <Route
          path="/unassigned-workshops"
          element={<UnassignedWorkshops></UnassignedWorkshops>}
        ></Route>
        <Route
          path="/unassigned-workshop/:workshopId"
          element={<WorkshopDetail></WorkshopDetail>}
        ></Route>
        <Route path="/workshops" element={<Workshops></Workshops>}></Route>
        <Route
          path="/workshop/:workshopId"
          element={<ActiveWorkshopDetail></ActiveWorkshopDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
