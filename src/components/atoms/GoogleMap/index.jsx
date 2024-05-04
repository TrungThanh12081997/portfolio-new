import React from "react";
import "./index.scss";
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps";

const MyMapComponent = withScriptjs(
    withGoogleMap((props) => {
        const lat = 10.750471402617382;
        const lng = 106.63193981044911;
        return (
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat, lng }}
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        );
    }),
);

export default MyMapComponent;
