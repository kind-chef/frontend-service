import KitchenTile from "./KitchenTile";
import { Typography } from "@mui/material";
export default function KitchenList(props) {
  return (
    <>
      <Typography variant="h2" align="center" style={{ paddingBottom: "10px" }}>
        Kitchen List
      </Typography>
      {props.Kitchens.map((Kitchen) => (
        <KitchenTile key={Kitchen.id} Kitchen={Kitchen} />
      ))}
    </>
  );
}
