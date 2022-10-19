import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" color="white" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="tabs"
          centered
        >
          <Link to="/">
          <Tab label="Accueil" className="tab" color="palette.primary.main" />
          </Link>
        
          <Tab label="À propos" className="tab" />
        </Tabs>
      </AppBar>
    </Box>
  );
}
