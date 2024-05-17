import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Gmap({longit, latit}) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCEvb3AFs9JIw6f38EO9-BEvb71RvOyxy0',
        libraries: ['places'],
    });
    const libraries = ['places'];
    const mapContainerStyle = {
      width: '100vw',
      height: '100vh'
    };
    const options = {
      disableDefaultUI: true,
      zoomControl: true
    };

    const center = {
        lat: {lat},
        long: {longit}
    }

    return (
      <>
      <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      > 
      <Marker position={center}/>
      </GoogleMap>
      </>
    )

}

export default Gmap;