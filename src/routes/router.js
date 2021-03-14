import React, {Fragment} from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import AppRestricted from '../containers/AppRestricted/AppRestricted'
import Home from '../containers/Home/home'
import NotFound from '../containers/Page/404'

const RestrictedRoutes = ({component: Component, isLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={
            props => 
                isLoggedIn ? 
                    (<Component {...props}/>) 
                :
                    <Redirect
                        to={{
                            pathname: `${process.env.PUBLIC_URL}/signin`,
                            state: { from: props.location },
                        }}
                    />
        }
    />
)

const PublicRouters = ({history, isLoggedIn}) => {
    return (
        <ConnectedRouter history={history}>
            <Router>
                <Fragment>
                    <Route 
                        exact
                        path={`${process.env.PUBLIC_URL}/`}
                        component={Home}
                    />
                    <Route
                        exact
                        path={`${process.env.PUBLIC_URL}/404`}
                        component={NotFound}
                    />
                    <RestrictedRoutes
                        path={`${process.env.PUBLIC_URL}/dashboard`}
                        component={AppRestricted}
                        isLoggedIn={isLoggedIn}
                    />
                </Fragment>
            </Router>
        </ConnectedRouter>
    )
}

export default connect(state => ({
    isLoggedIn: true
}))(PublicRouters)

