export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "ADD_FRIEND":
      action.payload.friend.id = findHighestId(state) + 1;
      return [...state, action.payload.friend];
    case "UPDATE_FRIEND":
      const keys = Object.keys(action.payload);
      const newArray = state.map((friend) => {
        if (friend.id === action.payload.id) {
          keys.forEach((key) => {
            friend[key] = action.payload[key];
          });
        }
        return friend;
      });
      return newArray;
    case "DELETE_FRIEND":
      const newArray2 = state.filter(
        (friend) => friend.id !== action.payload.id
      );
      return newArray2;
    default:
      return [...state];
  }
};

function findHighestId(friends) {
  let highest = 0;
  friends.forEach((friend) => {
    highest = friend.id > highest ? friend.id : highest;
  });
  return highest;
}
