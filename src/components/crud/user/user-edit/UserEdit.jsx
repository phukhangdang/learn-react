import React, { useReducer, useEffect } from "react";
import { reducer, initUser, addUser, setUser, getUserById } from "../reducer";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, dispatch] = useReducer(reducer, Object.assign({}, initUser));

  useEffect(() => {
    if (params.userId) {
      const user = getUserById(params.userId);
      dispatch(setUser(user));
    }
  }, []);

  const handleSubmit = () => {
    dispatch(addUser(user));
    if (params.userId) {
      setTimeout(() => {
        navigate("/user-list");
      }, 1000);
    } else {
      dispatch(setUser());
    }
  };

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
