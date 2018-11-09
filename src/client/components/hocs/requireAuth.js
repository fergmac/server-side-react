import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// We use a HOC here because we can add the reqiureAuth component
// to many different components more easily
export default (ChildComponent) => {
	class RequireAuth extends Component {
		render() {
			switch (this.props.auth) {
				case false:
					return <Redirect to="/" />;
				case null:
					return <div>Loading...</div>;
				default: 
					return <ChildComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps ({ auth }) {
		return { auth };
	}

	// We are connecting because RA needs to know about user auth status: located on auth state
	return connect(mapStateToProps)(RequireAuth);
};