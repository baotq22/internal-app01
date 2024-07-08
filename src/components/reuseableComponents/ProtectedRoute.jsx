import { Navigate } from "react-router-dom"
import useStore from "../../store/"

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useStore();
    return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute