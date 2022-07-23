import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

function StepsHome(props) {
  return (
    <Card
      sx={{ minWidth: 275, marginLeft: "auto", marginRight: "auto" }}
      className="border rounded-6xl w-2/3 "
    >
      <CardContent>
        <div className="flex flex-row items-center mb-2">
          <Typography
            variant="h2"
            component="div"
            color="text.white"
            fontWeight="bold"
            className="bg-red-500"
            width="70px"
            borderRadius="200%"
            marginRight={1}
          >
            {props.step}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 1.5, fontWeight: "bold" }}
            color="secondary"
          >
            {props.label}
          </Typography>
        </div>
        <Typography variant="body" padding={1}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StepsHome;
