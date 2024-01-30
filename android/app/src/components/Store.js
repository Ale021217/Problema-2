import { combineReducers, createStore } from 'redux';
import CourseReducer from './reducers/CourseReducer';

const ConfigureStore = () => {
  const reducers = combineReducers({ Courses: CourseReducer });
  const store = createStore(reducers);
  return store;
};

export default ConfigureStore;
