import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import MainLayout from './components/layouts/MainLayout'
import MapContainer from './components/MapContainer'
import Map from './components/Map'
import Weather from './components/Weather'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={MapContainer}>
                <IndexRoute component={Map} />
            </Route>
            <Route path="/weather" component={Weather} />
        </Route>
    </Router>
);
