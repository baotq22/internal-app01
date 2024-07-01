import '../../assets/css/sb-admin-2.min.css'

export default function ReuseableInput({ classes, requiredMark, label, id, pwd, format, placeholder, error, type, value, onChange, ...props }) {

    return (
        <>
            <div className="col-input">
                <label htmlFor={id}>{label} <span style={{ color: 'red' }}>{requiredMark}</span></label>
                {pwd}
                {format}
                <input
                    type={type}
                    className={classes}
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