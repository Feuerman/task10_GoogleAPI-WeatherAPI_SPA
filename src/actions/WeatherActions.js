import * as API from '../constants/api';
import axios from 'axios';
import configureStore from '../store/configureStore';

const store = configureStore();

export function currentWeather(value) {
		let menuState = store.getState().weather.showMenu;
    return dispatch => {
        return axios.get(API.WEATHER_CURRENT.URL, {
            params: {
                lat: value.latitude,
                lon: value.longitude,
                ctn: 7,
                APPID: API.API_KEY
            }
        })
            .then(response => {
                    dispatch(dispatchWeather(response.data))
										if (!menuState) {
											dispatch(showMenuItem())
										}
                }
            )
            .catch((error) => {
                console.log(error)
            })
    }
}
export function dispatchWeather(payload) {
    return {
        type: API.GET_WEATHER,
        payload
    }
}
export function showMenuItem() {
	return {
		type: API.SHOW_MENU_ITEM
	}
}
