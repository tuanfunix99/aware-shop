import React from 'react';

const Errors = (props) => {
  return (
    <div className={`alert alert-${props.variant || 'info'} mx-auto text-center`}>
      {props.children}
    </div>
  );
}

export default Errors;
