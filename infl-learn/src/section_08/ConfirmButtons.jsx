import React, { useState } from "react";

const ConfirmButton = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인 완료" : "확인 요망"}
    </button>
  );
};

export default ConfirmButton;
