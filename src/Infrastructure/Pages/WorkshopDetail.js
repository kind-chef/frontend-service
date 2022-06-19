import Layout from "../Components/UI/Layout";
import { useParams } from "react-router-dom";
import WorkshopDetailComponent from "../Components/Workshop/WorkshopDetail";
export default function WorkshopDetail() {
  const params = useParams();
  const workshopId = params.workshopId;
  return (
    <Layout>
      <WorkshopDetailComponent
        workshopId={workshopId}
      ></WorkshopDetailComponent>
    </Layout>
  );
}
