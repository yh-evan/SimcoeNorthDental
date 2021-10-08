import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
 import "./MapComponent.css";
class MapComponent extends React.Component {
    render(){
     
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={18}
              defaultCenter={{ lat: 43.892795, lng: -79.262971 }}
            >
              <div className="text-contact" data-aos="fade-up">
              <h2 className="MapComponent-title">CONTACT INFO</h2>
              <section className="MapComponent-info" >
              <span>what is my address</span>
              <br />
              <span>what is my phone number</span>
              <br />
              <span>what is my name</span>
              </section >
              </div >
              
              <Marker
                position={{ lat: 43.892795, lng: -79.262971 }}
              />
            </GoogleMap>
          ));
     return (
        <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUh8cAbJwwj-TdBjKfg-ohYIwZJyEqtvs&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div className="MapComponent-element" />}
  containerElement={<div className="MapComponent-container" />}
  mapElement={<div className="MapComponent-map" />}
/>

     );
     }
    }
export default MapComponent;
