import React from "react";
import GoogleMapReact from "google-map-react";
import logoLocation from "../../img/footer/location.png";

export default function Map() {
    const apiKey = "AIzaSyDPxSXVZLiawZMYiwvjUk4dl45ZAjR6yKw";
    const location = {
        lat: 47.02387,
        lng: 28.83708
    };

    function Marker() {
        return (
            <img className="w-5 h-5" src={logoLocation} alt="location" />
        );
    }

    return (
        <div className="w-1/2 flex flex-col justify-center ml-16">
            <h1 className="text-base py-2">Moldova, Chisinau, str. Vlaicu Parcalab, 52</h1>
            <div className="w-[420px] h-[190px]">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={location}
                    defaultZoom={16}
                >
                    <Marker
                        lat={location.lat}
                        lng={location.lng}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}