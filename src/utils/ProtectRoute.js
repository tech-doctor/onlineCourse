import LoginPage from "../Auth/login";
import { useSelector } from "react-redux";


const ProtectRoute = ({ children }) => {
    const user = useSelector(state => state.rootReducer.authSlice.userLoggedin)
    if (user) {
        return children;
    }
    return <LoginPage/>;
}

export default ProtectRoute;