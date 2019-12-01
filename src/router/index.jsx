import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import withLayoutAndScrollTop from 'Components/layout/with-layout-hoc';
import Routes from './routes';

function hasLayout(route) {
   const { component, hasLayout, needScrollTop, name } = route;
   return withLayoutAndScrollTop(component, hasLayout, needScrollTop, name);
}

function RouterHandler() {
   return (
      <Router history={history}>
         <Switch>
            {Routes.map((route, index) => {
               const Component = hasLayout(route);

               return (
                  <Route
                     exact={route.exact || false}
                     path={route.path}
                     key={index}
                     component={Component}
                  />
               );
            })}
         </Switch>
      </Router>
   );
}

export default RouterHandler;
