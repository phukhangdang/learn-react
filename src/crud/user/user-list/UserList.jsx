import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListUser } from "../reducer";

function UserList() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    setListUser(getListUser());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, index) => (
            <tr key={index}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <a href="#">Edit</a>
                <a href="#">Delete</a>
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
