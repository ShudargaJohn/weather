import { useState } from "react";

const JoinUsButton = () => {
  const [changeValue, setChangeValue] = useState(1);

  const changePage = () => {
    setChangeValue((prev) => (prev % 3) + 1);
  };

  return (
    <button onClick={changePage} className=" bg-black text-white">
      {changeValue < 3 ? `Continue${changeValue}/3` : `Submit${changeValue}/3`}
    </button>
  );
};
export default JoinUsButton;
