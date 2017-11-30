import React from 'react';
import StudentFieldsContainer from '../student_fields/student_fields_container.jsx';
import DeleteStudentContainer from '../delete_student/delete_student_container.jsx';
import EditStudentContainer from '../edit_student/edit_student_container.jsx';

export default function(props) {
  return (
    <div className='students-list'>
      {props.students.map((student, index) => {
        return (
          <div key={index} className='student'>
            {props.studentList.editableStudents.includes(student.hash) ?
              <StudentFieldsContainer student={student} editCurrentStudent={true} /> :
              <div className='student-data'>
                <div className='student-full-name'>{student.fullName}</div>
                <div className='student-birthday'>{student.birthday}</div>
                <DeleteStudentContainer studentHash={student.hash} />
                <EditStudentContainer hash={student.hash} />
              </div>
            }
          </div>
        );
      })}
    </div>
  );
}