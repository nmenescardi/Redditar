import React from 'react';

type Props = {
  handleReset: () => void;
};

const ResetButton: React.FC<Props> = ({ handleReset }) => {
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
