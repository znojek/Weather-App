import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import wallpaper from "./components/Wallpaper";

const API_KEY = "2a967887e6eea0f3b3c3d09cb545d277";

const initialState = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    cityValue: "",
    countryValue: "",
    error: ""
};

class App extends React.Component {
    state = initialState;

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        wallpaper(new Date().getHours());
    }

    getWeather = async e => {
        e.preventDefault();
        const { cityValue, countryValue } = this.state;
        if (!cityValue || !countryValue) {
            this.setState(initialState);
            return;
        }
        const request = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`
        );
        const data = await request.json();

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            countryValue: "",
            cityValue: "",
            error: ""
        });
    };
    render() {
        const { cityValue, countryValue } = this.state;
        return (
            <React.Fragment>
                <Titles />
                <Form
                    onChange={this.onChange}
                    getWeather={this.getWeather}
                    cityValue={cityValue}
                    countryValue={countryValue}
                />
                <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    city={this.state.city}
                    country={this.state.country}
                />
            </React.Fragment>
        );
    }
}
export default App;
