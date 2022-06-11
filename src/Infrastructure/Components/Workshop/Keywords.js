import { TextField, Stack, IconButton, Card } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useRef } from "react";
import KeywordItem from "./KeywordItem";
export default function Keywords(props) {
  let keywordInput = useRef();

  const addKeywordHandler = () => {
    props.onAdd(keywordInput.current.value);
    keywordInput.current.value = "";
  };

  const removeKeywordHandler = (keyword) => {
    props.onRemove(keyword);
  };
  return (
    <>
      <Stack direction="row">
        <TextField
          fullWidth
          label="Keyword"
          variant="standard"
          inputRef={keywordInput}
        ></TextField>
        <IconButton
          color="primary"
          aria-label="Add Keyword"
          component="span"
          onClick={addKeywordHandler}
        >
          <Add />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        {props.keywords.map((keyword) => (
          <KeywordItem
            keyword={keyword}
            key={keyword}
            onRemove={removeKeywordHandler}
          ></KeywordItem>
        ))}
      </Stack>
    </>
  );
}
