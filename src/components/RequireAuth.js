import Auth from "hooks/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.id);

    if (!user) {
        let local = localStorage.getItem("uid");
        if (local) {
            <Navigate to="/load" />
        } else {
            <Navigate to="/login" />
        }
    }
    return children;
};
export default RequireAuth;
