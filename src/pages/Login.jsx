import { useState, useEffect, useRef } from 'react'
import ReuseableInput from '../components/reuseableComponents/ReuseableInput50';
import ReuseableShowPwd from '../components/reuseableComponents/ReuseableShowPwd';
import eyeOpen from "../assets/svg/eye-svgrepo-com.svg"
import eyeClose from "../assets/svg/eye-slash-svgrepo-com.svg"
import ReuseableGroup from '../components/reuseableComponents/ReuseableGroup';
import ReuseableActionButton from '../components/reuseableComponents/ReuseableActionButton';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckWelcome } from '../checkWelcome';


function Login() {
    CheckWelcome();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [isError, setIsError] = useState({});
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDisabledClear, setIsDisabledClear] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)

    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const validatePassword = (password) => {
        const criteria = [
            { regex: /[A-Z]/, message: 'At least one uppercase character' },
            { regex: /\d/, message: 'At least one digit' },
            { regex: /[@$!%*?&]/, message: 'At least one special character' },
            { regex: /.{8,}/, message: 'At least 8 characters' },
        ];

        const errors = criteria
            .filter(({ regex }) => !regex.test(password))
            .map(({ message }) => message);

        return errors.length === 0 ? null : errors.join(', ');
    };

    useEffect(() => {
        const enabled =
            password !== '' &&
            validateEmail(email) && email !== ''
        setIsDisabled(enabled)

        const enabledClear =
            password || '' &&
            validateEmail(email) || email || ''
        setIsDisabledClear(enabledClear)
    }, [password, email])

    const errors = {}
    const btnSubmit = (event) => {
        event.preventDefault();
        if (password === '') {
            errors.password = 'This field is required'
        } else {
            const pwdError = validatePassword(password)
            if (pwdError) {
                errors.password = pwdError
            }
        }
        if (!validateEmail(email) || email === '') {
            errors.email = 'This field is required'
        }
        setIsError(errors)

        if (Object.keys(errors).length === 0) {
            console.log(
                "Email: " + email + "\n"
                + "Password: " + password + "\n"
            )
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/welcome');
            toast.success("Login successfully")
        }
    }

    const btnClear = (event) => {
        event.preventDefault();
        setPassword('');
        setEmail('');
        setIsError({});
        setIsShowPassword(false);
    }

    const validateTheEmail = (e) => {
        const value = e.target.value
        setEmail(value);
        if (validateEmail(value) || value === '') {
            setEmail(value);
            setIsError(prevErrors => ({ ...prevErrors, email: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, email: "Incorrect email format" }));
        }
    }

    const validateThePwd = (e) => {
        const value = e.target.value
        setPassword(value);
        const pwdError = validatePassword(value)
        if (value || value === '') {
            setPassword(value);
            setIsError(prevErrors => ({ ...prevErrors, password: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, password: pwdError }));
        }
    }

    return (
        <>
            <div className="containerForPage">
                <div className="containerForPageBody">
                    <div className="form">
                        <div className="text-center">
                            <h1 className="text-label">Sign In!</h1>
                        </div>
                        <form onSubmit={btnSubmit} onReset={btnClear} id="form" className="user">
                            <ReuseableGroup
                                elements={
                                    <>
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Email: "
                                            type="email"
                                            id="email"
                                            classes='input-box'
                                            value={email}
                                            placeholder="Email"
                                            onChange={validateTheEmail}
                                            error={isError.email}
                                        />
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Password: "
                                            type={isShowPassword ? "text" : "password"}
                                            id="pass"
                                            classes='input-box'
                                            value={password}
                                            placeholder="Password"
                                            onChange={validateThePwd}
                                            error={isError.password}
                                            pwd={
                                                <ReuseableShowPwd
                                                    src={isShowPassword ? eyeOpen : eyeClose}
                                                    value={isShowPassword}
                                                    onClick={() => setIsShowPassword((prev) => !prev)}
                                                />
                                            }
                                        />
                                    </>
                                }
                            />
                            <div className="btn-container" style={{ marginTop: '30px' }}>
                                <ReuseableActionButton
                                    type='submit'
                                    disabledClass={isDisabled}
                                    disabled={!isDisabled}
                                    label='Submit'
                                />
                                <ReuseableActionButton
                                    type='reset'
                                    disabledClass={isDisabledClear}
                                    disabled={!isDisabledClear}
                                    label='Clear'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login