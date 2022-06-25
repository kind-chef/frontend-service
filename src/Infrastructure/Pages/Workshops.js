import Layout from "../Components/UI/Layout";
import { useState, useEffect, useCallback } from "react";
import GetActiveWorkshops from "../../Application/GetActiveWorkshops";
import ActiveWorkshopList from "../Components/Workshop/ActiveWorkshopList";
export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);

  const retrieveWorkshops = useCallback(async () => {
    const result = await new GetActiveWorkshops().execute();
    console.log(result);
    setWorkshops(result.data);
  }, [setWorkshops]);

  useEffect(() => {
    retrieveWorkshops();
  }, [retrieveWorkshops]);
  return (
    <Layout>
      <ActiveWorkshopList workshops={workshops} />
    </Layout>
  );
}
