import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from './Map';
import * as WeatherActions from '../actions/WeatherActions';

class App extends React.Component {  
    render() {
        return <div>
            <Map MapParams={ this.props.MapParams } getWeather={ this.props.getWeather }/>
        </div>
    }
}
function mapStateToProps (state) {
    return {
        MapParams: state.map
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getWeather: bindActionCreators(WeatherActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
