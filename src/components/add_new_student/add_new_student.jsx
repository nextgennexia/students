import React from 'react';

export default function(props) {
  return (
    <div className='app-button' onClick={ props.handleAddNewStudent }>Добавить студента</div>
  );
}