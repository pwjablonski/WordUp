import { createLogic } from "redux-logic";
import { signOut } from "../clients/firebase";

export default createLogic({
  type: "LOG_OUT",
  async process(deps, dispatch, done) {
    signOut();
    done();
  }
});
