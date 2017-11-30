import * as types from '../actions/action_types';

const initialState = {
  students: [],
  savedStudent: {},
  deletedStudent: {}
};

const studentsReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.SAVED_STUDENT:
      return Object.assign({}, state, {students: action.students, savedStudent: action.savedStudent});
    case types.RECEIVED_STUDENTS:
      return Object.assign({}, state, {students: action.students});
    case types.DELETED_STUDENT:
      return Object.assign({}, state, {students: action.students, deletedStudent: action.savedStudent});
  }

  return state;
};

export default studentsReducer;