import * as types from '../actions/action_types';

const initialState = {
  editableStudents: []
};

const studentsListReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.STUDENT_LIST_EDITABLE:
      return Object.assign({}, state, {editableStudents: [action.hash]});
    case types.STUDENT_LIST_NOT_EDITABLE:
      return Object.assign({}, state, {editableStudents: []});
  }

  return state;
};

export default studentsListReducer;