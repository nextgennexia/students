import React from 'react';
import store from '../../store';
import { studentListNotEditable } from '../../actions/student_list_actions';
import StudentFields from './student_fields.jsx';

export default class StudentFieldsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({hash: '', fullName: '', birthday: ''}, this.props.student);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancelStudentEditing = this.handleCancelStudentEditing.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCancelStudentEditing() {
    store.dispatch(studentListNotEditable());
  }

  render() {
    return (
      <StudentFields
        student={this.state}
        editCurrentStudent={this.props.editCurrentStudent}
        handleInputChange={this.handleInputChange}
        handleCancelStudentEditing={this.handleCancelStudentEditing}
      />
    );
  }
}