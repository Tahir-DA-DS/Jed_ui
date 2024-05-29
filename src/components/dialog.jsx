import React from 'react';

function Dialog({ onClose }) {
  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Welcome to Skyrun Meter Acquisition System</h2>
        <button onClick={onClose} className="dialog-button">
          Ok
        </button>
      </div>
    </div>
  );
}

export default Dialog;
