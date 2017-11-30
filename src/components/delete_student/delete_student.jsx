import React from 'react';

export default function(props) {
  return (
    <div className='pseudo-link' onClick={props.handleDeleteStudent}>Удалить</div>
  );
}