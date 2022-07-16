import { useParams } from "react-router-dom";
import Layout from "../Components/UI/Layout";
import AssignedWorkshopDetail from "../Components/Workshop/AssignedWorkshopDetail";
export default function ActiveWorkshopDetail(props) {
  const params = useParams();
  const workshopId = params.workshopId;
  return (
    <Layout>
      <AssignedWorkshopDetail workshopId={workshopId}></AssignedWorkshopDetail>
    </Layout>
  );
}
