export default function ReuseableRadio({ value, checked, onChange, label }) {
    return (
        <>
            <div className="col-radio">
                <label htmlFor={value}></label>
                <input
                    type="radio"
                    className="sex"
                    name="gender"
                    checked={checked}
                    id={value}
                    value={value}
                    onChange={onChange}
                />
                {label}
            </div>
        </>
    )
}