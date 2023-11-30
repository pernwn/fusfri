import { Paper, Typography } from "@mui/material";
import { FilledBtn } from "../components/buttons";

export default function HomePage(){
  return (
    <Paper>
      <FilledBtn name="Button Test" page="/" />
      <Typography>hej</Typography>

    </Paper>

  )
}