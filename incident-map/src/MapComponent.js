import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  const halifaxCoords = {
    lat: 44.6488,
    lng: -63.5752
  };

  const containerStyle = {
    width: '100%',
    height: '100vh'

  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={halifaxCoords}
        zoom={12}
      >
        <Marker position={halifaxCoords} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapComponent;
