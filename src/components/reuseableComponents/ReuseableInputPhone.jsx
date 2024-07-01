import '../../assets/css/sb-admin-2.min.css'

export default function ReuseableInputForPhone({ label, idFormat, id, placeholder, error, type, valueFormat, value, onChange, onChangeFormat, ...props }) {

    return (
        <>
            <div className="col-input">
                <label htmlFor={id}>{label}</label>
                <div className='col-input-flex'>
                    <input
                        type={type}
                        className="input-box input-box-format"
                        id={idFormat}
                        value={valueFormat}
                        onChange={onChangeFormat}
                        disabled
                    />
                    <input
                        type={type}
                        className="input-box input-box-phone"
                        id={id}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        {...props}
                    />
                </div>
                <div className="redAsterisk">&nbsp;{error && <>{error}</>}</div>
            </div>
        </>
    )
}