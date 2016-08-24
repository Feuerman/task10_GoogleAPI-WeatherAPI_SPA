import React from "react";

export default class Map extends React.Component {
    initMap(lat, lng, zoom = 2) {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: zoom
        });
        let searchInput = document.getElementById('map-search');
        let options = {
            types: ['(cities)'],
            componentRestrictions: {}
        };

        let autocomplete = new google.maps.places.Autocomplete(searchInput, options);
        let places = new google.maps.places.PlacesService(map);
        let that = this;

        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            if (place.geometry) {
                map.panTo(place.geometry.location);
                map.setZoom(8);
                that.getWeather(place.geometry.location.lat(), place.geometry.location.lng())
            } else {
                searchInput.placeholder = 'Enter a city'
            }
        });
        map.addListener('click', function(e) {
						map.setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng()});
						map.setZoom(8);
            that.getWeather(e.latLng.lat(), e.latLng.lng());
        })
    }
    getWeather(lat, lng) {
        this.props.getWeather.currentWeather({ latitude: lat, longitude: lng });
    }
    componentDidMount() {
        this.initMap(0, 10, 2)
    }
    render() {
        let mapStyle = {
            height: '500px'
        };
        return (
            <div>
								<div className="row">
									<div className="col-sm-6 xol-xs-12">
										<input type="text" id="map-search" className="form-control map-search__input"/>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
                		<div id="map" style={ mapStyle }></div>
									</div>
								</div>
            </div>
        )
    }
}
