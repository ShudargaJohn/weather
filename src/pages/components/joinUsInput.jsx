const { useState } = require("react");

const JoinUsInput = (props) => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const addFirstName = (e) => {
    setNewFirstName(e.target.value);
  };
  const addLastName = (e) => {
    setNewLastName(e.target.value);
  };
  const addUserName = (e) => {
    setNewUserName(e.target.value);
  };

  return (
    <div>
      <p>First Name</p>
      <input value={newFirstName} onChange={addFirstName} type="text" />
      <p>Last Name</p>
      <input value={newLastName} onChange={addLastName} type="text" />
      <p>User Name</p>
      <input value={newUserName} onChange={addUserName} type="text" />
    </div>
  );
};

export default JoinUsInput;
