import React from 'react';
import store from '../../store';
import { studentListEditable } from '../../actions/student_list_actions';
import EditStudent from './edit_student.jsx';

export default class EditStudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleEditStudent = this.handleEditStudent.bind(this);
  }

  handleEditStudent() {
    store.dispatch(studentListEditable(this.props.hash));
  }

  render() {
    return (
      <EditStudent handleEditStudent={this.handleEditStudent} />
    );
  }
}