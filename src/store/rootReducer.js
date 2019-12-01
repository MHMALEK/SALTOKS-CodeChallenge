import {combineReducers} from 'redux';
import AppReducer from './app/reducer';
import RepositoryReducer from './repository/reducer';
import UiReducer from './ui/reducer';

export default combineReducers({
  App: AppReducer,
  Repository: RepositoryReducer,
  Ui: UiReducer,
});
