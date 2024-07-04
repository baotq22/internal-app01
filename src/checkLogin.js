import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export function CheckLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        const usernameLocalStorage = localStorage.getItem('username');
        const passwordLocalStorage = localStorage.getItem('password');
        
        if (!usernameLocalStorage && !passwordLocalStorage) {
            navigate('/')
        }
    }, []);
}