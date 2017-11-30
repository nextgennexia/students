import React from 'react';
import StudentFieldsContainer from '../student_fields/student_fields_container.jsx';
import StudentsListContainer from '../student_list/students_list_container.jsx';

export default class Home extends React.Component {
  render () {
    return (
      <div className='students-container'>
        <StudentFieldsContainer />
        <StudentsListContainer />
      </div>
    );
  }
}