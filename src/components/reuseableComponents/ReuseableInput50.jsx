import '../../assets/css/sb-admin-2.min.css'

export default function ReuseableInput({ requiredMark, label, id, pwd, placeholder, error, type, value, onChange, ...props }) {

    return (
        <>
            <div className="col-input-login">
                <label htmlFor={id}>{label} <span style={{ color: 'red' }}>{requiredMark}</span></label>
                {pwd}
                <input
                    type={type}
                    className="form-control form-control-user"
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                <div className="redAsterisk">&nbsp;{error && <>{error}</>}</div>
            </div>
        </>
    )
}