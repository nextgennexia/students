import React from 'react';
import store from '../../store';
import { studentListNotEditable } from '../../actions/student_list_actions';
import CancelStudentEditing from './cancel_student_editing.jsx';

export default class CancelStudentEditingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCancelStudentEditing = this.handleCancelStudentEditing.bind(this);
  }

  handleCancelStudentEditing() {
    store.dispatch(studentListNotEditable());
  }

  render() {
    return (
      <CancelStudentEditing handleCancelStudentEditing={this.handleCancelStudentEditing} />
    );
  }
}