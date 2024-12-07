import { createContext } from "react";
const userContext = createContext({
  loggedInuser: "Default User",
});

export default userContext;
