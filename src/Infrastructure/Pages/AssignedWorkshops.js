import Layout from "../Components/UI/Layout";
import { useState, useEffect, useCallback } from "react";
import GetAssignedWorkshops from "../../Application/GetAssignedWorkshops";
import AssignedWorkshopList from "../Components/Workshop/AssignedWorkshopList";
import getUserInfo from "../Utils/GetUserInfo";
export default function AssignedWorkshops() {
  const [workshops, setWorkshops] = useState([]);

  const retrieveWorkshops = useCallback(async () => {
    const userDetail = getUserInfo();
    const result = await new GetAssignedWorkshops().execute(userDetail._id);
    setWorkshops(result.data);
  }, [setWorkshops]);

  useEffect(() => {
    retrieveWorkshops();
  }, [retrieveWorkshops]);

  return (
    <Layout>
      <AssignedWorkshopList workshops={workshops} hideActions={true} />
    </Layout>
  );
}
