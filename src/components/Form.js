import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input
            value={props.cityValue}
            onChange={props.onChange}
            type="text"
            name="cityValue"
            placeholder="City..."
        />
        <input
            value={props.countryValue}
            onChange={props.onChange}
            type="text"
            name="countryValue"
            placeholder="Country..."
        />
        <button>Get Weather</button>
    </form>
);

export default Form;
