import React, { useState, useEffect, Component } from "react";
import { LoadScript } from "@react-google-maps/api";
import Map from "../Map";
import Nav from "../Nav";

function MapContainer() {
  return (
    <div>
      <Nav />
      <LoadScript googleMapsApiKey="AIzaSyDE2yBUEZx3Cup_pwq22o_WferVgBpgSdE">
        <Map />
      </LoadScript>
    </div>
  );
}

export default MapContainer;
