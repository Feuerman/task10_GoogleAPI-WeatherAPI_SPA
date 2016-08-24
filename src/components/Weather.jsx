import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../constants/api';

export default class Weather extends Component {
    tempCelsius(value) {
			let temp = (value - 273).toFixed(0)
			return temp <= 0 ? temp : '+' + temp
    }
    render() {
        let currentWeather = this.props.weather.weatherData;
				console.log(currentWeather)
        return (
            <div>
                <div className="weather">
										<div className="weather__item">
											<div className="weather__title">
												<p>{currentWeather.name}</p>
												<img src={`${API.WEATHER_ICON.URL}${currentWeather.weather[0].icon}${API.WEATHER_ICON.EXTENSION}`} alt=""/>
												<p>{this.tempCelsius(currentWeather.main.temp)}</p>
											</div>
											<div className="weather__desc">
												<p>{currentWeather.weather[0].description}</p>
											</div>
										</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather)
