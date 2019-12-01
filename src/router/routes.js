import PATH_TO from './utils';

// import page componentes;
import HomePage from 'Components/pages/home';
import NotFound from 'Components/pages/not-found/not-found';
import RepositoryDetailsPage from 'Components/pages/repository-details';
import RepositoriesMainPage from 'Components/pages/repositories-main';

const Routes = [
   {
      path: PATH_TO.INDEX,
      name: 'HomePage',
      component: HomePage,
      exact: true,
      meta: [],
      isPrivate: false,
      hasLayout: true,
   },

   {
      path: PATH_TO.REPOSITORY_MAIN,
      name: 'Repository Main',
      component: RepositoriesMainPage,
      exact: true,
      meta: [],
      isPrivate: false,
      hasLayout: false,
   },

   {
      path: PATH_TO.REPOSITORY_DETAILS,
      name: 'Repository Details',
      component: RepositoryDetailsPage,
      exact: false,
      meta: [],
      isPrivate: false,
      hasSubRoute: true,
      hasLayout: true,
   },

   {
      path: PATH_TO.NOT_FOUND,
      name: 'NotFound',
      component: NotFound,
      exact: true,
      meta: [],
      isPrivate: false,
      hasLayout: true,
   },
];

export default Routes;
