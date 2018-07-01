import React from 'react';

const UserForm = props => {
  return (
    <form onSubmit={props.getUser} >
      <input type="text" name="username" style={{ margin: "20px auto", display:"block" }} />
      <button>Submit</button>
    </form>
  );
}

export default UserForm;