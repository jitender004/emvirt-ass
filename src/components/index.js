import { useMemo } from "react";
import { DrawingManager, GoogleMap, Marker } from "@react-google-maps/api";

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const centers = [
    {
      lat: 37.772,
      lng: -122.214,
    },
    {
      lat: 37.672,
      lng: -122.219,
    },
    {
      lat: 37.832,
      lng: -122.424,
    },
  ];
  const onLoad = (drawingManager) => {
    console.log(drawingManager);
  };

  const onPolygonComplete = (polygon) => {
    console.log(polygon);
  };

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={2}
      center={centers[0]}
    >
      <Marker
        icon={{
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 7,
        }}
        position={centers[0]}
      />
      <Marker
        icon={
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
        position={centers[1]}
      />
      <Marker
        icon={{
          path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
          fillColor: "yellow",
          fillOpacity: 0.9,
          scale: 2,
          strokeColor: "gold",
          strokeWeight: 2,
        }}
        position={centers[2]}
      />
      
    </GoogleMap>
  );
}

export default Map;
