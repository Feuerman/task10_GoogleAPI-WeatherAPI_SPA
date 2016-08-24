import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class MainLayout extends React.Component {
		render() {
			return (
				<div className="container">
					<header className="primary-header">
						<div className="navbar-header">
							<span className="navbar-brand">Google API + Weather API SPA</span>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							<ul className="nav navbar-nav navbar-right">
								<li className={ this.props.showMenu ? '' : 'hidden-menu-item'}><Link to="/weather" activeClassName="active">Weather</Link></li>
								<li><Link to="/" activeClassName="active">Map</Link></li>
							</ul>
						</div>
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			)
		}
}

function mapStateToProps (state) {
	return {
		showMenu: state.weather.showMenu
	}
}
export default connect(mapStateToProps)(MainLayout);
