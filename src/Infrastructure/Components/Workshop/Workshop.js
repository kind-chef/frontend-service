import {
  Card,
  CardActionArea,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Workshop(props) {
  const navigate = useNavigate();
  const detailButtonHandler = () => {
    navigate(props.url);
  };
  const displayableDescription =
    props.workshop.description.length > 200
      ? `${props.workshop.description.substring(200)}...`
      : props.workshop.description;
  return (
    <Card tyle={{ backgroundColor: "#f9faf7", marginBottom: "10px" }}>
      <CardActionArea onClick={detailButtonHandler}>
        <CardMedia
          component="img"
          height="140"
          image={props.workshop.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.workshop.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {displayableDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={detailButtonHandler}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
}
