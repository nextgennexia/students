import * as types from '../actions/action_types';

export function studentListEditable(hash) {
  return {
    type: types.STUDENT_LIST_EDITABLE,
    hash
  };
}

export function studentListNotEditable() {
  return {
    type: types.STUDENT_LIST_NOT_EDITABLE
  };
}