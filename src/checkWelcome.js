import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export function CheckWelcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const usernameLocalStorage = localStorage.getItem('username');
        const passwordLocalStorage = localStorage.getItem('password');
        
        if (usernameLocalStorage && passwordLocalStorage) {
            navigate('/welcome')
        }
    }, []);
}