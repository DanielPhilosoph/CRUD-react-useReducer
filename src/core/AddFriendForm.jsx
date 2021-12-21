import React, { useRef, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { mainContext } from "../context/StateProvider";

export default function AddFriendForm() {
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  //? Access the state via context provider
  const { dispatch } = useContext(mainContext);

  const onAddClick = () => {
    dispatch({
      type: "ADD_FRIEND",
      payload: {
        friend: {
          name: firstName.current.value,
          lastName: lastName.current.value,
          age: age.current.value < 0 ? 0 : age.current.value,
        },
      },
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          ref={firstName}
          type="text"
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          ref={lastName}
          type="text"
          placeholder="Enter last name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Age</Form.Label>
        <Form.Control ref={age} type="number" placeholder="18" />
      </Form.Group>

      <Button variant="primary" type="button" onClick={onAddClick}>
        Add friend
      </Button>
    </Form>
  );
}
