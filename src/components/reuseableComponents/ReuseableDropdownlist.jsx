export default function ReuseableDropdownlist({value, label, onChange, json, error, ...props}) {
    return (
        <>
            <div className="col-dropdownlist">
                <label htmlFor={value}>{label} <span style={{ color: 'red' }}>*</span></label>
                <select
                    className="dropdownlist"
                    id={value}
                    value={value}
                    onChange={onChange}
                    {...props}
                >
                    <option value="">---</option>
                    {json}
                </select>
                <div className="redAsterisk">&nbsp;{error && <>{error}</>}</div>
            </div>
        </>
    )
}