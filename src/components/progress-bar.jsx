import React from 'react';

const ProgressBar = (props) => {
  return (
    <div className="progress mb-3" style={{height: '10px'}}>
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: props.complete + '%'}}></div>
    </div>
  )
}

export default ProgressBar;
