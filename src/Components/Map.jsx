import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 27.910566461716154,
      lng: 85.15955505048389,
    },
    zoom: 18,
  };

  return (
    <div className='Map'>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
