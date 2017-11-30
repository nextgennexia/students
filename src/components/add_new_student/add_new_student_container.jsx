import React from 'react';
import store from '../../store';
import uuid from 'uuid/v4';
import { savedStudent } from '../../actions/student_actions';
import AddNewStudent from './add_new_student.jsx';

export default class AddNewStudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddNewStudent = this.handleAddNewStudent.bind(this);
  }

  handleAddNewStudent() {
    if (!this.props.student.fullName || !this.props.student.birthday) { return; }

    let students = localStorage['students'] ? JSON.parse(localStorage.getItem('students')) : [];

    students.push(Object.assign({}, this.props.student, { hash: uuid() }));
    localStorage.setItem('students', JSON.stringify(students));
    store.dispatch(savedStudent(this.props.student, students));
  }

  render() {
    return (
      <AddNewStudent handleAddNewStudent={this.handleAddNewStudent} />
    );
  }
}