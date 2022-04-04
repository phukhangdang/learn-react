import { SET_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constants";
import { key, getListUser, newGuid } from "./service";

export const initUser = {
  fullname: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.propName) {
        state[action.propName] = action.payload;
      } else {
        state = null;
        return { ...initUser };
      }
      return { ...state };
    case ADD_USER:
      const user = Object.assign({}, state);
      user.id = newGuid();
      const listUser = getListUser();
      listUser.push(user);
      const listUserJSON = JSON.stringify(listUser);
      localStorage.setItem(key, listUserJSON);
      return { ...state };
    case EDIT_USER:
      break;
    case DELETE_USER:
      break;
    default:
      throw new Error("Invalid action.");
  }
};

export default reducer;
