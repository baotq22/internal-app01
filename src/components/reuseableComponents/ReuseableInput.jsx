export default function ReuseableInput({ classes, requiredMark, label, id, pwd, placeholder, error, errorMatch, type, value, onChange, ...props }) {

    return (
        <div className="col-input">
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
            {errorMatch}
        </div>
    )
}