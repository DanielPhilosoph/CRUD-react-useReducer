import friends from "../db/db";

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return friends;
    default:
      return [...state];
  }
};
