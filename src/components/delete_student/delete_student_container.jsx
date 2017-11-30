import React from 'react';
import store from '../../store';
import { deletedStudent } from '../../actions/student_actions';
import DeleteStudent from './delete_student.jsx';

export default class DeleteStudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }

  handleDeleteStudent() {
    let students = localStorage['students'] && JSON.parse(localStorage.getItem('students'));
    let foundStudentIndex = students && students.findIndex((student) => {
      return student.hash === this.props.studentHash;
    });

    students.splice(foundStudentIndex, 1);
    localStorage.setItem('students', JSON.stringify(students));
    store.dispatch(deletedStudent(this.state, students));
  }

  render() {
    return (
      <DeleteStudent handleDeleteStudent={this.handleDeleteStudent} />
    );
  }
}