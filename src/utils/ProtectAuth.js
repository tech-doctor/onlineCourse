import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { reset } from "../Store/authSlice";

const ProtectAuth = ({ children }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.rootReducer.authSlice.userLoggedin);
    useEffect(() => {
   dispatch(reset());
    if (user) {
        history.push("/");
    }
  },[user]);
    return children;
}

export default ProtectAuth;