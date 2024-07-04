import { useState, useEffect } from 'react'
import eyeOpen from "../assets/svg/eye-svgrepo-com.svg"
import eyeClose from "../assets/svg/eye-slash-svgrepo-com.svg"
import getAllFromJson from "../assets/json/brand.json"
import ReuseableGroup from '../components/reuseableComponents/ReuseableGroup'
import ReuseableInput from '../components/reuseableComponents/ReuseableInput'
import ReuseableShowPwd from '../components/reuseableComponents/ReuseableShowPwd'
import ReuseableRadio from '../components/reuseableComponents/ReuseableRadio'
import ReuseableDropdownlist from '../components/reuseableComponents/ReuseableDropdownlist'
import ReuseableActionButton from '../components/reuseableComponents/ReuseableActionButton'
import ReuseableInputForPhone from '../components/reuseableComponents/ReuseableInputPhone'
import { CheckWelcome } from '../checkWelcome'

function Registers() {
    CheckWelcome();
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
    const [model, setModel] = useState('')
    const [format, setFormat] = useState('+84 ')

    const [isError, setIsError] = useState({});
    const [isMatchPwd, setIsMatchPwd] = useState(true)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDisabledClear, setIsDisabledClear] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowCfPwd, setIsShowCfPwd] = useState(false)

    const validateName = (name) => /^[a-zA-Z ]+$/.test(name);
    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePhone = (phoneNumber) => /^\[3578]\d{8}$/.test(phoneNumber);

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
            validateEmail(email) && email !== '' && dob !== '' && model !== ''
        validatePassword(password) === null && gender !== '' && brand !== ''
        setIsDisabled(enabled)

        const enabledClear =
            firstName !== '' ||
            lastName !== '' ||
            password !== '' ||
            confirmPassword !== '' ||
            address !== '' || model !== '' ||
            email !== '' || dob !== '' ||
            gender !== '' || brand !== ''
        setIsDisabledClear(enabledClear)
    }, [firstName, lastName, password, confirmPassword, address, email, dob, gender, brand, model])

    useEffect(() => {
        setIsMatchPwd(password === confirmPassword)
    }, [password, confirmPassword])

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
        if (model === '') {
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
                + "Phone Number: " + format + phoneNumber + "\n"
                + "Email: " + email + "\n"
                + "Gender: " + gender + "\n"
                + "Brand: " + brand + "\n"
                + "Model: " + model + "\n"
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
        setGender('');
        setBrand('');
        setModel('');
        setIsError({});
        setIsMatchPwd(true);
        setIsShowPassword(false);
        setIsShowCfPwd(false);
    }

    const validateFirstName = (e) => {
        const { value } = e.target
        if (validateName(value) || value === '') {
            setFirstName(value)
            setIsError(prevErrors => ({ ...prevErrors, firstName: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, firstName: "Not contain number and special characters" }))
        }
    }

    const validateLastName = (e) => {
        const { value } = e.target
        if (validateName(value) || value === '') {
            setLastName(value)
            setIsError(prevErrors => ({ ...prevErrors, lastName: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, lastName: "Not contain number and special characters" }))
        }
    }

    const validateTheEmail = (e) => {
        const { value } = e.target
        setEmail(value);
        if (validateEmail(value) || value === '') {
            setEmail(value);
            setIsError(prevErrors => ({ ...prevErrors, email: null }));
        } else {
            setIsError(prevErrors => ({ ...prevErrors, email: "Incorrect email format" }));
        }
    }

    const validateThePwd = (e) => {
        const { value } = e.target
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
        const { value } = e.target
        setConfirmPassword(value);
        if (value || value === '') {
            setConfirmPassword(value);
            setIsError(prevErrors => ({ ...prevErrors, confirmPassword: null }));
        }
    }

    const validateTheAddress = (e) => {
        const { value } = e.target
        setAddress(value);
        if (value || value === '') {
            setAddress(value);
            setIsError(prevErrors => ({ ...prevErrors, address: null }));
        }
    }

    const validateThePhone = (e) => {
        const { value } = e.target
        setPhoneNumber(value)
        if (validatePhone(value)) {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: null }));
        } else if (value.length > 9) {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: "Maximum character is 9" }))
        } else {
            setIsError(prevErrors => ({ ...prevErrors, phoneNumber: null }))
        }
    }

    const formatFixed = (e) => {
        const { value } = e.target
        setFormat(value)
    }

    const getToday = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear());

        return `${year}-${month}-${day}`
    }

    const getModelsByBrand = (brandName) => {
        const brandModel = getAllFromJson.find((b) => b.name === brandName)
        return brandModel ? brandModel.model : []
    }

    return (
        <>
            <div className="containerForPage">
                <div className="containerForPageBody">
                    <div className="form">
                        <div className="text-center">
                            <h1 className="text-label">Create an Account!</h1>
                        </div>
                        <form onSubmit={btnSubmit} onReset={btnClear} id="form" className="user">
                            <ReuseableGroup
                                elements={
                                    <>
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="First Name: "
                                            type="text"
                                            id="firstName"
                                            classes="input-box"
                                            value={firstName}
                                            placeholder="First Name"
                                            onChange={validateFirstName}
                                            error={isError.firstName}
                                        />
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Last Name: "
                                            type="text"
                                            id="lastName"
                                            classes="input-box"
                                            value={lastName}
                                            placeholder="Last Name"
                                            onChange={validateLastName}
                                            error={isError.lastName}
                                        />
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Password: "
                                            type={isShowPassword ? "text" : "password"}
                                            id="pass"
                                            classes="input-box"
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
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Confirm Password: "
                                            type={isShowCfPwd ? "text" : "password"}
                                            id="cfPass"
                                            classes="input-box"
                                            value={confirmPassword}
                                            placeholder="Confirm Password"
                                            onChange={validateTheCfPwd}
                                            error={isError.confirmPassword}
                                            pwd={
                                                <ReuseableShowPwd
                                                    src={isShowCfPwd ? eyeOpen : eyeClose}
                                                    value={isShowCfPwd}
                                                    onClick={() => setIsShowCfPwd((prev) => !prev)}
                                                />
                                            }
                                            errorMatch={!isMatchPwd && <div style={{ color: "red" }}>* Passwords do not match</div>}
                                        />

                                        <ReuseableInput
                                            requiredMark="*"
                                            label="D.O.B: "
                                            type="date"
                                            id="Dob"
                                            classes="input-box"
                                            value={dob}
                                            onChange={e => setDob(e.target.value)}
                                            error={isError.dob}
                                            max={getToday()}
                                        />
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Address: "
                                            type="text"
                                            id="address"
                                            classes="input-box"
                                            value={address}
                                            placeholder="Address"
                                            onChange={validateTheAddress}
                                            error={isError.address}
                                        />
                                        <ReuseableInput
                                            requiredMark="*"
                                            label="Email: "
                                            type="email"
                                            id="email"
                                            classes="input-box"
                                            value={email}
                                            placeholder="Email"
                                            onChange={validateTheEmail}
                                            error={isError.email}
                                        />
                                        <ReuseableInputForPhone
                                            label="Phone Number: "
                                            type="text"
                                            idFormat="format"
                                            id="phoneNumber"
                                            value={phoneNumber}
                                            valueFormat={format}
                                            onChangeFormat={formatFixed}
                                            onChange={validateThePhone}
                                            placeholder="Phone Number"
                                            error={isError.phoneNumber}
                                        />
                                    </>
                                }
                            />
                            <ReuseableGroup
                                elements={
                                    <>
                                        <label>Gender: </label>
                                        <ReuseableRadio
                                            checked={gender === 'male'}
                                            value="male"
                                            onChange={(e) => setGender(e.target.value)}
                                            label="Male"
                                        />
                                        <ReuseableRadio
                                            checked={gender === 'female'}
                                            value="female"
                                            onChange={(e) => setGender(e.target.value)}
                                            label="Female"
                                        />
                                        <ReuseableRadio
                                            checked={gender === 'unknown'}
                                            value="unknown"
                                            onChange={(e) => setGender(e.target.value)}
                                            label="Unknown"
                                        />
                                    </>
                                }
                            />
                            <ReuseableGroup
                                elements={
                                    <>
                                        <ReuseableDropdownlist
                                            value="brand"
                                            label="Brand: "
                                            onChange={(e) => setBrand(e.target.value)}
                                            json={getAllFromJson.map((getAllBrand) => (
                                                <option key={getAllBrand.name} value={getAllBrand.name}>{getAllBrand.name}</option>
                                            ))}
                                            error={isError.brand}
                                        />
                                        <ReuseableDropdownlist
                                            value="model"
                                            label="Model: "
                                            onChange={(e) => setModel(e.target.value)}
                                            json={getModelsByBrand(brand).map((model) => (
                                                <option key={model.name} value={model.name}>{model.name}</option>
                                            ))}
                                            error={isError.model}
                                            disabled={!brand}
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

export default Registers