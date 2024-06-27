import { useState, useEffect } from 'react'
import '../assets/css/sb-admin-2.min.css'
import eyeOpen from "../assets/svg/eye-svgrepo-com.svg"
import eyeClose from "../assets/svg/eye-slash-svgrepo-com.svg"
import getAllFromJson from "../assets/json/brand.json"

function Registers() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [brand, setBrand] = useState('')

    const [isError, setIsError] = useState({});
    const [isMatchPwd, setIsMatchPwd] = useState(true)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDisabledClear, setIsDisabledClear] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowCfPwd, setIsShowCfPwd] = useState(false)

    const validateName = (name) => /^[a-zA-Z ]+$/.test(name);
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePhone = (phoneNumber) => /^\+84[3578]\d{8}$/.test(phoneNumber);

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
            validateName(firstName) && firstName !== '' &&
            validateName(lastName) && lastName !== '' &&
            password !== '' &&
            confirmPassword !== '' &&
            password === confirmPassword &&
            address !== '' &&
            validateEmail(email) && email !== '' && dob !== '' &&
            validatePassword(password) === null && gender !== '' && brand !== ''
        setIsDisabled(enabled)
        
        const enabledClear =
            firstName !== '' ||
            lastName !== '' ||
            password !== '' ||
            confirmPassword !== '' ||
            address !== '' ||
            email !== '' || dob !== '' ||
            gender !== '' || brand !== ''
        setIsDisabledClear(enabledClear)
    }, [firstName, lastName, password, confirmPassword, address, email, dob, gender, brand])

    const errors = {}
    const btnSubmit = (event) => {
        event.preventDefault();
        if (!validateName(firstName) || firstName === '') {
            errors.firstName = 'This field is required'
        }
        if (!validateName(lastName) || lastName === '') {
            errors.lastName = 'This field is required'
        }
        if (password === '') {
            errors.password = 'This field is required'
        } else {
            const pwdError = validatePassword(password)
            if (pwdError) {
                errors.password = pwdError
            }
        }
        if (confirmPassword === '') {
            errors.confirmPassword = 'This field is required'
        }
        if (password != confirmPassword) {
            errors.confirmPassword = '2nd Password does not match with 1st Password'
            setIsMatchPwd(false)
        } else {
            setIsMatchPwd(true)
        }
        if (address === '') {
            errors.address = 'This field is required'
        }
        if (!validateEmail(email) || email === '') {
            errors.email = 'This field is required'
        }
        if (dob === '') {
            errors.dob = 'Select your D.O.B'
        }
        if (gender === '') {
            errors.gender = 'This field is required'
        }
        if (brand === '') {
            errors.brand = 'This field is required'
        }
        setIsError(errors)

        if (Object.keys(errors).length === 0) {
            console.log(
                "First Name: " + firstName + "\n"
                + "Last Name: " + lastName + "\n"
                + "D.O.B: " + dob + "\n"
                + "Password: " + password + "\n"
                + "Confirm Password: " + confirmPassword + "\n"
                + "Address: " + address + "\n"
                + "Phone Number: " + phoneNumber + "\n"
                + "Email: " + email + "\n"
                + "Gender: " + gender + "\n"
                + "Brand: " + brand + "\n"
            )
        }
    }

    const btnClear = (event) => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
        setDob('');
        setAddress('');
        setEmail('');
        setPhoneNumber('');
        setGender('')
        setBrand('')
        setIsError({});
        setIsMatchPwd(true);
    }

    const validateFirstName = (e) => {
        const value = e.target.value;
        if (validateName(value) || value === '') {
            setFirstName(value)
            setIsError(prevErrors => ({ ...prevErrors, firstName: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, firstName: "Not contain number and special characters" }))
        }
    }

    const validateLastName = (e) => {
        const value = e.target.value;
        if (validateName(value) || value === '') {
            setLastName(value)
            setIsError(prevErrors => ({ ...prevErrors, lastName: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, lastName: "Not contain number and special characters" }))
        }
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

    const validateTheCfPwd = (e) => {
        const value = e.target.value
        setConfirmPassword(value);
        if (value || value === '') {
            setConfirmPassword(value);
            setIsError(prevErrors => ({ ...prevErrors, confirmPassword: null }));
        }
    }

    const validateTheAddress = (e) => {
        const value = e.target.value
        setAddress(value);
        if (value || value === '') {
            setAddress(value);
            setIsError(prevErrors => ({ ...prevErrors, address: null }));
        }
    }

    const validateThePhone = (e) => {
        const value = e.target.value
        setPhoneNumber(value)
        if (validatePhone(value)) {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: null }));
        } else if (value.length > 12) {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: "Maximum character is 12 (included Plus symbol)" }))
        } else {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: "Wrong of Vietnamese format" }))
        }
    }

    const getToday = (e) => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear());

        return `${year}-${month}-${day}`
    }

    return (
        <>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="form">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form onSubmit={btnSubmit} onReset={btnClear} id="form" className="user">
                                <div className="form-group row">
                                    <div className="col-input mb-3 mb-sm-0">
                                        <label htmlFor="firstName">First Name: <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            id="firstName"
                                            placeholder='First Name'
                                            value={firstName}
                                            onChange={validateFirstName}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.firstName && <>{isError.firstName}</>}</div>
                                    </div>
                                    <div className="col-input mb-3 mb-sm-0">
                                        <label htmlFor="lastName">Last Name: <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            id="lastName"
                                            placeholder='Last Name'
                                            value={lastName}
                                            onChange={validateLastName}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.lastName && <>{isError.lastName}</>}</div>
                                    </div>
                                    <div className="col-input mb-3 mb-sm-0">
                                        <label htmlFor="pass">Password: <span style={{ color: 'red' }}>*</span></label>
                                        <img
                                            src={isShowPassword ? eyeOpen : eyeClose}
                                            className='pwdAppear'
                                            value={isShowPassword}
                                            onClick={() =>
                                                setIsShowPassword((prev) => !prev)
                                            }
                                            style={{ position: 'absolute' }}
                                        />
                                        <input
                                            type={
                                                isShowPassword ? "text" : "password"
                                            }
                                            className="form-control form-control-user"
                                            id="pass"
                                            placeholder='Password'
                                            value={password}
                                            onChange={validateThePwd}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.password && <>{isError.password}</>}</div>
                                    </div>
                                    <div className="col-input">
                                        <label htmlFor="cfPass">Confirm Password: <span style={{ color: 'red' }}>*</span></label>
                                        <img
                                            src={isShowCfPwd ? eyeOpen : eyeClose}
                                            className='pwdAppear'
                                            value={isShowCfPwd}
                                            onClick={() =>
                                                setIsShowCfPwd((prev) => !prev)
                                            }
                                        />
                                        <input
                                            type={
                                                isShowCfPwd ? "text" : "password"
                                            }
                                            className="form-control form-control-user"
                                            id="cfPass"
                                            placeholder='Confirm Password'
                                            value={confirmPassword}
                                            onChange={validateTheCfPwd}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.confirmPassword && <>{isError.confirmPassword}</>}</div>
                                    </div>
                                    <div className="col-input">
                                        <label htmlFor="Dob">D.O.B: <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control form-control-user"
                                            id="Dob"
                                            value={dob}
                                            onChange={e => setDob(e.target.value)}
                                            max={getToday()}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.dob && <>{isError.dob}</>}</div>
                                    </div>
                                    <div className="col-input">
                                        <label htmlFor="address">Address: <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            id="address"
                                            placeholder='Address'
                                            value={address}
                                            onChange={validateTheAddress}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.address && <>{isError.address}</>}</div>
                                    </div>
                                    <div className="col-input">
                                        <label htmlFor="email">Email: <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            id="email"
                                            placeholder='Email'
                                            value={email}
                                            onChange={validateTheEmail}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.email && <>{isError.email}</>}</div>
                                    </div>
                                    <div className="col-input">
                                        <label htmlFor="phoneNumber">Phone Number: </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-user"
                                            id="phoneNumber"
                                            placeholder='Phone Number'
                                            value={phoneNumber}
                                            onChange={validateThePhone}
                                        />
                                        <div className="redAsterisk">&nbsp;{isError.phoneNumber && <>{isError.phoneNumber}</>}</div>
                                    </div>
                                </div>
                                <div id="gender" className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <label htmlFor="gender">Gender: </label>
                                    <label htmlFor="male">
                                        <input
                                            type="radio"
                                            className="sex"
                                            name="gender"
                                            chekced={gender === 'male'}
                                            value="male"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Male
                                    </label><br />
                                    <label htmlFor="female">
                                        <input
                                            type="radio"
                                            className="sex"
                                            name="gender"
                                            chekced={gender === 'female'}
                                            value="female"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Female
                                    </label><br />
                                    <label htmlFor="unknown">
                                        <input
                                            type="radio"
                                            className="sex"
                                            name="gender"
                                            chekced={gender === 'unknown'}
                                            value="unknown"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                        Unknown
                                    </label><br />
                                </div>
                                <div className="redAsterisk">&nbsp;{isError.gender && <>{isError.gender}</>}</div>
                                <div className="form-group">
                                    <label htmlFor="brand">Brand: <span style={{ color: 'red' }}>*</span></label>
                                    <select
                                        className="dropdownlist"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    >
                                        <option value="">---</option>
                                        {getAllFromJson.map((getAllBrand) => (
                                            <option value={getAllBrand.name}>{getAllBrand.name}</option>
                                        ))}
                                    </select>
                                    <div className="redAsterisk">&nbsp;{isError.brand && <>{isError.brand}</>}</div>
                                </div>
                                <div className="btn-container" style={{ marginTop: '30px' }}>
                                    <button type='submit' className={isDisabled ? "action-button" : "action-button-disabled"} disabled={!isDisabled}>Submit</button>
                                    <button type='reset' className={isDisabledClear ? "action-button" : "action-button-disabled"} disabled={!isDisabledClear}>Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registers