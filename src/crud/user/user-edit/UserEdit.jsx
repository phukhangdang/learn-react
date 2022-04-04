import React, { useReducer } from "react";
import { reducer, initUser, addUser, setUser } from "../reducer";

function UserEdit() {
  const [user, dispatch] = useReducer(reducer, Object.assign({}, initUser));

  const handleSubmit = () => {
    dispatch(addUser(user));
    dispatch(setUser({}));
  };

  console.log("re-render");

  return (
    <div>
      <fieldset>
        <legend>Fullname:</legend>
        <input
          name="fullname"
          value={user.fullname}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "fullname"));
          }}
        />
      </fieldset>
      <fieldset>
        <legend>Email:</legend>
        <input
          name="email"
          value={user.email}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "email"));
          }}
        />
      </fieldset>
      <fieldset>
        <legend>Phone:</legend>
        <input
          name="phone"
          value={user.phone}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "phone"));
          }}
        />
      </fieldset>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserEdit;
