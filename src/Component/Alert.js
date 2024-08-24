import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
    {props.alert && (
      <div className={'alert alert-success alert-dismissible fade show'} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>)}
      </div>
  )
}

export default Alert;