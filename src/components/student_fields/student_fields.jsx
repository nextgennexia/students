import React from 'react';
import AddNewStudentContainer from '../add_new_student/add_new_student_container.jsx';
import SaveEditableStudent from '../save_editable_student/save_editable_student_container.jsx';
import CancelStudentEditing from '../cancel_student_editing/cancel_student_editing_container.jsx';

export default function(props) {
  return (
    <div className='student-fields'>
      {props.editCurrentStudent || <h1>Форма добавления студентов:</h1>}
      <div className='student-fields-row'>
        <label>
          {props.editCurrentStudent || 'ФИО:'}
          <input className='app-text-field' type='text' name='fullName' value={ props.student.fullName } onChange={ props.handleInputChange } />
        </label>
        <label>
          {props.editCurrentStudent || 'Дата рождения:'}
          <input className='app-text-date' type='date' name='birthday' value={ props.student.birthday } onChange={ props.handleInputChange } />
        </label>
        {props.editCurrentStudent ?
          <div className='button-wrap'>
            <SaveEditableStudent student={ props.student } />
            <CancelStudentEditing />
          </div> :
          <AddNewStudentContainer student={ props.student } />}
      </div>
    </div>
  );
}