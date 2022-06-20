import { useParams } from "react-router-dom";
import Layout from "../Components/UI/Layout";
import ActiveWorkshopDetailComponent from "../Components/Workshop/ActiveWorkshopDetail";
export default function ActiveWorkshopDetail(props) {
  const params = useParams();
  const workshopId = params.workshopId;
  return (
    <Layout>
      <ActiveWorkshopDetailComponent
        workshopId={workshopId}
      ></ActiveWorkshopDetailComponent>
    </Layout>
  );
}
