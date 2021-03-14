import React, {Fragment} from 'react'
import { Route } from 'react-router'
import NotFound from '../../containers/Page/404'

const routes = [
    {
        role: ['superadmin', 'admin'],
        path: 'landing',
        component: NotFound
    }
]

const AppRouter = ({...props}) => {
    const {url} = props
    return (
        <Fragment>
            {
                routes.map(singleRoute => {
                    const {path, exact, ...props} = singleRoute
                    return(
                        <Route
                            exact={exact ? true : false}
                            key={singleRoute.path}
                            path={`${url}/${singleRoute.path}`}
                            {...props}
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default AppRouter
