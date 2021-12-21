import React, { useContext } from "react";

import { mainContext } from "../context/StateProvider";
import { ListGroup } from "react-bootstrap";
import AddFriendForm from "./AddFriendForm";
import FriendItem from "./FriendItem";

export default function Page() {
  //? Access the state via context provider
  const { friendsState } = useContext(mainContext);

  return (
    <div className="page">
      <div>
        <h2 className="pageHeader">My friends</h2>
      </div>
      <div className="addFriendDiv">
        <hr />
        <AddFriendForm />
      </div>
      <div className="friendsDiv">
        <ListGroup as="ol" numbered>
          {friendsState.map((friend, i) => {
            return (
              <FriendItem
                key={`friendItem${friend.id}`}
                name={friend.name}
                lastName={friend.lastName}
                age={friend.age}
                id={friend.id}
              />
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}
