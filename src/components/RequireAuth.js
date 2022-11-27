import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {

    const user = useSelector((state) => state.user.id);

    if (!user) {
        const local = localStorage.getItem("uid");
        if (local) {
            return <Navigate to="/load" />
        } else {
            return <Navigate to="/login" />
        }
    } else {
        return children;
    }

};
export default RequireAuth;
