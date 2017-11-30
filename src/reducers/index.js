import { combineReducers } from 'redux';

// Reducers
import studentsReducer from './students_reducer';
import studentsListReducer from './student_list_reducer';

// Combine Reducers
var reducers = combineReducers({
  studentsState: studentsReducer,
  studentsListState: studentsListReducer
});

export default reducers;