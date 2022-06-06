import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function WorkdhopTile(props) {
  const navigate = useNavigate();
  const detailButtonHandler = () => navigate(`/kitchens/${props.Kitchen.id}`);

  return (
    <Card style={{ backgroundColor: "#f9faf7", marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.Kitchen.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`${props.Kitchen.street}, ${props.Kitchen.city}, ${props.Kitchen.province}`}
        </Typography>
        <CardActions>
          <Button size="small" onClick={detailButtonHandler}>
            View More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
