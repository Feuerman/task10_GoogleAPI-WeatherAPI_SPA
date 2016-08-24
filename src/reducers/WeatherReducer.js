import * as API from '../constants/api';

const initialState = {
    weatherData: {},
		showMenu: false
};

export default function currentWeather(state = initialState, action) {
    switch (action.type) {
        case API.GET_WEATHER:
            return { ...state, weatherData: action.payload };
				case API.SHOW_MENU_ITEM:
					return { ...state, showMenu: true };
        default:
            return state
    }
}
