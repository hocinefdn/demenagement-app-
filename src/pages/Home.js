import React from "react";
import Header from "../components/Header";
import { Parallax, Background } from "react-parallax";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
function Home() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    fontSize: "18px",
    backgroundColor: red[500],
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: red[800],
    },
  }));
  return (
    <div>
      <Header />
      <Parallax
        bgImage={require("../assets/home.jpg")}
        bgImageAlt="the dog"
        // strength={-200}
      >
        <div className="text-center bg-white w-11/12 mr-auto ml-auto rounded-2xl p-2 mt-32 ">
          <h1 className="text-6xl font-bold text-red-500  ">
            L'app facile du déménagement et de la livraison
          </h1>
          <div className="text-lg w-11/12 mr-auto ml-auto mt-4">
            Réserve nos Mates, les spécialistes du déménagement et de la
            livraison au Canada. Ils transportent tes gros objets en toute
            sérénité, du point A au point B.
          </div>
          <ColorButton variant="contained">
            Obtiens ton estimation gratuite instantanée
          </ColorButton>
        </div>
        <div style={{ height: "350px" }} />
      </Parallax>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
      <div>reaer</div>
    </div>
  );
}

export default Home;
