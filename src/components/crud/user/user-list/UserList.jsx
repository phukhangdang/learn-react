import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getListUser, deleteUserById } from "../reducer";

function UserList() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    setListUser(getListUser());
  }, []);

  const handleOnBtnEditClick = (id) => {
    navigate(`/user-edit/${id}`);
  };

  const handleOnBtnDeleteClick = (id) => {
    deleteUserById(id);
    setListUser(getListUser());
  };

  const handleOnBtnAddUserClick = () => {
    navigate("/user-edit");
  };

  return (
    <div>
      <button onClick={handleOnBtnAddUserClick}>Add user</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <a href="#" onClick={() => handleOnBtnEditClick(user.id)}>
                  Edit
                </a>
                <a href="#" onClick={() => handleOnBtnDeleteClick(user.id)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default UserList;
