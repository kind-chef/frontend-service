import Layout from "../Components/UI/Layout";
import getUnassignedWorkshops from "../../Application/GetUnassignedWorkshops";
import { useState, useEffect, useCallback } from "react";
import WorkshopList from "../Components/Workshop/WorkshopList";
export default function UnassignedWorkshops() {
  const [workshops, setWorkshops] = useState([]);

  const retrieveWorkshops = useCallback(async () => {
    const result = await new getUnassignedWorkshops().execute();
    console.log(result);
    setWorkshops(result.data);
  }, [setWorkshops]);

  useEffect(() => {
    retrieveWorkshops();
  }, [retrieveWorkshops]);

  return (
    <Layout>
      <WorkshopList workshops={workshops} />
    </Layout>
  );
}
