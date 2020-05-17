import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import RouterD from './routerFactory/routerD.jsx'
import { store } from './store'
import './utils/rem'
import './index.less'
import routerList from './routerFactory/index'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <RouterD routerList={routerList} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
