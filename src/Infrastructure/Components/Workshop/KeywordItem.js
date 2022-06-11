import { Card, IconButton } from "@mui/material";
import Remove from "@mui/icons-material/Remove";

export default function KeywordItem(props) {
  const removeHandler = () => props.onRemove(props.keyword);
  return (
    <Card>
      {props.keyword}
      <IconButton
        color="primary"
        aria-label="Add Keyword"
        component="span"
        onClick={removeHandler}
      >
        <Remove />
      </IconButton>
    </Card>
  );
}
