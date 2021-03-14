import React, {Fragment} from 'react'
import './AppRestricted.scss'

import AppRouter from './AppRouter'

const App = ({...props}) => {
    // const { history, location } = props
    const {match} = props
    const {url} = match
    return (
        //Bikin Bentuk kaya CMS, ada topbar, sidebar, footer
        //Ini baru ada content nya approuter
        <Fragment>
            <div>App Restricted</div>
            <AppRouter url={url}/>
        </Fragment>
    )
}

export default App
