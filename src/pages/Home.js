import React from "react";
import Header from "../components/Header";
import { Parallax } from "react-parallax";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import StepsHome from "../components/home/StepsHome";
import { Link } from "react-router-dom";
function Home() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    fontSize: "18px",
    backgroundColor: red[500],
    margin: "20px",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: red[800],
    },
  }));
  return (
    <div>
      <Header />
      <Parallax bgImage={require("../assets/home.jpg")} bgImageAlt="the dog">
        <div className="text-center bg-white w-11/12 mr-auto ml-auto rounded-2xl p-2 mt-32 ">
          <h1 className="text-6xl font-bold text-red-500  ">
            L'app facile du déménagement et de la livraison
          </h1>
          <div className="text-lg w-11/12 mr-auto ml-auto mt-4">
            Réserve nos Mates, les spécialistes du déménagement et de la
            livraison au Canada. Ils transportent tes gros objets en toute
            sérénité, du point A au point B.
          </div>

          <Link to="/estimation">
            <ColorButton variant="contained" to="/eueueu">
              Obtiens ton estimation gratuite instantanée
            </ColorButton></Link>
        </div>
        <div style={{ height: "200px" }} />
      </Parallax>
      <div className="text-center bg-white w-11/12 mr-auto ml-auto rounded-2xl p-2 mt-8 ">
        <h1 className="text-6xl font-bold text-red-500">
          Le déménagement et la livraison n'ont jamais été si simples.
        </h1>
        <div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className=""></div>
            <div className="col-span-2">
              <StepsHome
                step="1"
                label="Renseigne tes informations"
                description="Sélectionne l'itinéraire et les meubles à déménager"
                side="right"
              />
            </div>

            <div className="col-span-2">
              <StepsHome
                step="2"
                label="Reçois ton estimation"
                description="Notre plateforme affiche une estimation de prix en temps réel. Pas de surprise de dernière minute, ni de frais de transit."
                side="left"
              />
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className="col-span-2 ...">
              <StepsHome
                step="3"
                label="Prend Rendez-vous"
                description="Laisse nos Mates qualifiés transporter tes biens en tout sécurité!"
              />
            </div>
          </div>

          <ColorButton variant="contained">C'est parti !</ColorButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
