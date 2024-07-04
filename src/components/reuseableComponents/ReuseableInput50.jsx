export default function ReuseableInput({ requiredMark, label, classes, id, pwd, placeholder, error, type, value, onChange, ...props }) {

    return (
        <div className="col-input-login">
            <label htmlFor={id}>{label} <span style={{ color: 'red' }}>{requiredMark}</span></label>
            <div className='col-input-flex'>
                <input
                    type={type}
                    className={classes}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
                {pwd}
            </div>
            <div className="redAsterisk">&nbsp;{error && <>{error}</>}</div>
        </div>
    )
}