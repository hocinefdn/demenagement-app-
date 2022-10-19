import L from "leaflet";
import { createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import './map.css';

const createRoutineMachineLayer = (props) => {
 

  const instance = L.Routing.control({
    
   
    geocoder: L.Control.Geocoder.nominatim(),
    showAlternatives:false,
    language:'fr',
    draggableWaypoints: false,
   lineOptions : {
      addWaypoints: false,
      extendToWaypoints:false,
      
  }


  })
  instance.on( 'routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    
  })
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;