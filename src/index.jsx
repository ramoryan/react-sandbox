import React    from 'react'
import ReactDOM from 'react-dom'

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'

import App from './components/app/App.jsx'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept('./components/app/App.jsx', () => {
    render(App)
  })
}

