import * as React from 'react'

import { theme } from './config/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { appRoutes, modalAppRoutes } from './config/routes'
import { NotFoundPage } from './components/pages/not-found-page'

console.log('theme', theme)

export const ApplicationRouter: React.FC = props => {
  const renderRoutes = (routes: any[]): JSX.Element[] => {
    return routes.map(route => <Route {...{ ...route }} />)
  }

  return (
    <Router>
      <Switch>{renderRoutes(modalAppRoutes)}</Switch>
      <Switch>
        {renderRoutes(appRoutes)}
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}
