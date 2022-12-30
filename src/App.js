import { useLoadScript } from "@react-google-maps/api";
// import { withScriptjs } from "@react-google-maps/api";

import Map from "./components/index";
import "./App.css";
import Box from "@mui/material/Box";
export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAC_kemZPA3bACKM4NU7NQVvgSGniQUdIQ",
    libraries: ["drawing"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
