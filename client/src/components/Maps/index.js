import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
// 34.0960903,-117.5754925

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 34.0960903,
      lng: -117.5754925
    },
    zoom: 19
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "300px",
          width: "100%",
          marginTop: "1rem",
          marginBottom: "1rem"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <FaMapMarkerAlt
            lat={34.0960903}
            lng={-117.5754925}
            text={"GTR High Performance"}
            style={{ width: "2rem", height: "2rem", color: "#c41200" }}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
