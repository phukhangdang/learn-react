import { SET_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constants";
import { mergeUser } from "./service";

export const initUser = {
  fullname: "",
  email: "",
  phone: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER:
      if (action.propName) {
        return { ...state, [action.propName]: action.payload };
      } else if (!action.payload) {
        state = null;
        return { ...initUser };
      } else {
        return { ...action.payload };
      }
    case ADD_USER:
      const user = Object.assign({}, state);
      mergeUser(user);
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
