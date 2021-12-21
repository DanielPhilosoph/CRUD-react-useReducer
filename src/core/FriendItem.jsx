import React, { useContext } from "react";
import { ListGroup, Badge } from "react-bootstrap";

import { mainContext } from "../context/StateProvider";

export default function FriendItem({ name, lastName, age, id }) {
  const { dispatch } = useContext(mainContext);

  let prevValue;

  const onFinishedEditing = (event) => {
    const target = event.target;

    if (target.innerText !== "") {
      // If age and not a number or smaller then 0 then do nothing
      if (
        target.dataset.field === "age" &&
        (isNaN(target.innerText) || parseInt(target.innerText) < 0)
      ) {
        target.innerText = prevValue;
        return;
      }
      // Else if its firstName or lastName then cant be under 2 chars
      else if (target.dataset.field !== "age" && target.innerText.length < 3) {
        target.innerText = prevValue;
        return;
      } else {
        //? If valid then dispatch
        let payloadObg = { id: id };
        // Assign field to the payload obj, so the reducer will know what to change
        payloadObg[target.dataset.field] = target.innerText;
        dispatch({ type: "UPDATE_FRIEND", payload: payloadObg });
      }
    } else {
      target.innerText = prevValue;
      return;
    }
  };

  const onDeleteClick = () => {
    dispatch({ type: "DELETE_FRIEND", payload: { id: id } });
  };

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div
          data-field="name"
          className="fw-bold"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={onFinishedEditing}
          onClick={(event) => {
            prevValue = event.target.innerText;
          }}
        >
          {name}
        </div>
        <div
          data-field="lastName"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={onFinishedEditing}
          onClick={(event) => {
            prevValue = event.target.innerText;
          }}
        >
          {lastName}
        </div>
      </div>
      <div className="deleteDiv">
        <button className="deleteButton" onClick={onDeleteClick}>
          DELETE
        </button>
      </div>
      <Badge variant="primary" pill>
        Age{" "}
        <span
          data-field="age"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={onFinishedEditing}
          onClick={(event) => {
            prevValue = event.target.innerText;
          }}
        >
          {age}
        </span>
      </Badge>
    </ListGroup.Item>
  );
}
