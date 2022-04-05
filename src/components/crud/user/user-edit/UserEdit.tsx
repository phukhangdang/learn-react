import React, { useReducer, useEffect } from "react";
import { reducer, initUser, addUser, setUser, getUserById } from "../reducer";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";

function UserEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, dispatch] = useReducer(reducer, Object.assign({}, initUser));

  useEffect(() => {
    if (params.userId) {
      const user = getUserById(params.userId);
      dispatch(setUser(user));
    }
  }, [params.userId]);

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
    <Container>
      <Row>
        <label>Fullname:</label>
      </Row>
      <Row>
        <input
          name="fullname"
          value={user.fullname}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "fullname"));
          }}
        />
      </Row>
      <Row>
        <label>Email:</label>
      </Row>
      <Row>
        <input
          name="email"
          value={user.email}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "email"));
          }}
        />
      </Row>
      <Row>
        <label>Phone:</label>
      </Row>
      <Row>
        <input
          name="phone"
          value={user.phone}
          onChange={(event) => {
            dispatch(setUser(event.target.value, "phone"));
          }}
        />
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Button variant="secondary" onClick={handleSubmit}>
          Submit
        </Button>
      </Row>
    </Container>
  );
}

export default UserEdit;
