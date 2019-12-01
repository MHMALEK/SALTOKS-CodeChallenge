import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import history from "./history"
import PATH_TO from "./utils"
import withLayoutAndScrollTop from "Components/layout/with-layout-hoc"

// import page componentes;
import HomePage from "Components/pages/home"
import NotFound from "Components/pages/not-found/not-found"
import RepositoryDetailsPage from "Components/pages/repository-details"
import RepositoriesMainPage from "Components/pages/repositories-main"

const Routes = [
  {
    path: PATH_TO.INDEX,
    name: "HomePage",
    component: HomePage,
    exact: true,
    meta: [],
    isPrivate: false,
    hasLayout: true,
    needScrollToTopOnInit: false
  },

  {
    path: PATH_TO.REPOSITORY_MAIN,
    name: "Repository",
    component: RepositoriesMainPage,
    exact: true,
    meta: [],
    isPrivate: false,
    hasLayout: false,
    needScrollToTopOnInit: false
  },

  {
    path: PATH_TO.REPOSITORY_DETAILS,
    name: "Repository",
    component: RepositoryDetailsPage,
    exact: false,
    meta: [],
    isPrivate: false,
    hasSubRoute: true,
    hasLayout: true,
    needScrollToTopOnInit: true
  },

  {
    path: PATH_TO.NOT_FOUND,
    name: "NotFound",
    component: NotFound,
    exact: true,
    meta: [],
    isPrivate: false,
    needScrollToTopOnInit: false
  }
]

function hasLayout(route) {
  return withLayoutAndScrollTop(
    route.component,
    route.hasLayout,
    route.needScrollToTopOnInit,
    route.name
  )
}

function RouterHandler() {
  return (
    <Router history={history}>
      <Switch>
        {Routes.map((route, index) => {
          const Component = hasLayout(route)

          return (
            <Route
              exact={route.exact || false}
              path={route.path}
              key={index}
              component={Component}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default RouterHandler
