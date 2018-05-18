import React from "react";

const Weather = props => (
    <div className="tempHumCityCountry">
        {props.temperature && (
            <p className="paragraph">Temperature: {props.temperature} [°C]</p>
        )}
        {props.humidity && (
            <p className="paragraph">humidity: {props.humidity} [%],</p>
        )}
        {props.description && (
            <p className="paragraph">description: {props.description} </p>
        )}
        {props.city &&
            props.country && (
                <p>
                    Your location: {props.city}, {props.country}
                </p>
            )}
    </div>
);
export default Weather;
