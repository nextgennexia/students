import React from 'react';
import { connect } from 'react-redux';
import { receivedStudents } from '../../actions/student_actions';
import store from '../../store';
import StudentsList from './students_list.jsx';

class StudentsListContainer extends React.Component {
  componentDidMount() {
    let students = localStorage['students'] ? JSON.parse(localStorage.getItem('students')) : [];

    store.dispatch(receivedStudents(students));
  }

  render() {
    return (
      <StudentsList students={this.props.students} studentList={this.props.studentsList} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    students: store.studentsState.students,
    studentsList: store.studentsListState
  };
};

export default connect(mapStateToProps)(StudentsListContainer);