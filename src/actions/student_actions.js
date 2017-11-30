import * as types from '../actions/action_types';

export function savedStudent(savedStudent, students) {
  return {
    type: types.SAVED_STUDENT,
    savedStudent,
    students
  };
}

export function deletedStudent(deletedStudent, students) {
  return {
    type: types.DELETED_STUDENT,
    deletedStudent,
    students
  };
}

export function receivedStudents(students) {
  return {
    type: types.RECEIVED_STUDENTS,
    students
  };
}