import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { getListUser, deleteUserById } from "../reducer";
import styles from "../../../../assets/sass/Style.module.scss";

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
    <>
      <Button style={{ margin: "10px 0px 10px 0px" }} variant="secondary" onClick={handleOnBtnAddUserClick}>
        Add user
      </Button>
      <table
        className={clsx(
          styles.table,
          styles.tableRowBordered,
          styles.tableGreyHeader
        )}
      >
        <thead>
          <tr className={clsx(styles.bold)}>
            <th>Id</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
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
                <DropdownButton id="dropdown-basic-button" variant="secondary">
                  <Dropdown.Item onClick={() => handleOnBtnEditClick(user.id)}>
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleOnBtnDeleteClick(user.id)}
                  >
                    Delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
