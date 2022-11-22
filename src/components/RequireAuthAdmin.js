import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuthAdmin = ({ children }) => {
    const user = useSelector((state) => state.user.id);

    if (!user && user.role === "admin") return <Navigate to="/" />;
    return children;
};

export default RequireAuthAdmin