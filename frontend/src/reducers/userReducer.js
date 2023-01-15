import Cookies from "js-cookie";
export function userReducer(
  state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  action
) {
  switch (action.type) {
    case "Login":
      return action.payload;

    default:
      return state;
  }
}
