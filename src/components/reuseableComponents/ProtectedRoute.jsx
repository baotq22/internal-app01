import { Route, Navigate } from "react-router-dom"
import useStore from "../../store"

const ProtectedRoute = ({ component, ...rest }) => {
    const { isAuthenticated } = useStore();

    return isAuthenticated ? component : <Navigate to="/login" />;

}

export default ProtectedRoute