import React from 'react';

const ResetButton = ({ handleReset }) => {
  const refresh = () => {
    handleReset();
    window.location.reload();
  };
  return (
    <div className="reset-button">
      <button onClick={() => refresh()}>Reset</button>
    </div>
  );
};

export default ResetButton;
