import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Avenue() {
  return (
    <React.Fragment>
      <Title>Recent Avenue</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Detail
        </Link>
      </div>
    </React.Fragment>
  );
}
