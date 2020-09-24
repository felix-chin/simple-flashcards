import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: props.complete + '%'}}></div>
    </div>
  )
}

export default ProgressBar;
