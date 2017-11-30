import React from 'react';
import store from '../../store';
import { savedStudent } from '../../actions/student_actions';
import { studentListNotEditable } from '../../actions/student_list_actions';
import SaveEditableStudent from './save_editable_student.jsx';

export default class SaveEditableStudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSaveEditableStudent = this.handleSaveEditableStudent.bind(this);
  }

  handleSaveEditableStudent() {
    if (!this.props.student.fullName || !this.props.student.birthday) { return; }

    let students = localStorage['students'] ? JSON.parse(localStorage.getItem('students')) : [];
    let studentIndex = students.findIndex((item) => {
      return item.hash === this.props.student.hash;
    });

    students.splice(studentIndex, 1, this.props.student);
    localStorage.setItem('students', JSON.stringify(students));
    store.dispatch(savedStudent(this.props.student, students));
    store.dispatch(studentListNotEditable());
  }

  render() {
    return (
      <SaveEditableStudent handleSaveEditableStudent={this.handleSaveEditableStudent} />
    );
  }
}