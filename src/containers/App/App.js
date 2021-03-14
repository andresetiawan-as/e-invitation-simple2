import React from 'react'
import { Provider } from 'react-redux';
import { store, history } from '../../redux/store';
import './App.scss'
import './global.scss'

import PublicRoutes from '../../routes/router'

const App = () => {
    return (
        <Provider store={store}>
            <PublicRoutes history={history}/>
        </Provider>
    )
}

export default App
