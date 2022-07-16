import GetUnapprovedKitchens from "../../Application/GetUnapprovedKitchens";
import KitchenList from "../Components/Kitchen/KitchenList";
import Layout from "../Components/UI/Layout";
import { useEffect, useCallback, useState } from "react";
export default function Kitchens() {
  const [Kitchens, setKitchens] = useState([]);

  const retrieveKitchens = useCallback(async () => {
    setKitchens(await new GetUnapprovedKitchens().execute());
  }, [setKitchens]);

  useEffect(() => {
    retrieveKitchens();
  }, [retrieveKitchens]);

  return (
    <Layout>
      {Kitchens && <KitchenList Kitchens={Kitchens}></KitchenList>}
    </Layout>
  );
}
