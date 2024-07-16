export default function ReuseableInputName({ classes, label, id, idFN, idLN, placeholderFN, placeholderLN, valueFN, valueLN, onChangeFN, onChangeLN, errorFN, errorLN, ...props }) {

    return (
        <div className="col-input">
            <label htmlFor={id}>{label} <span style={{ color: 'red' }}>*</span></label>
            <div className='col-input-flex'>
                <input
                    type="text"
                    className={classes}
                    id={idFN}
                    placeholder={placeholderFN}
                    value={valueFN}
                    onChange={onChangeFN}
                    {...props}
                />
                <input
                    type="text"
                    className={classes}
                    id={idLN}
                    placeholder={placeholderLN}
                    value={valueLN}
                    onChange={onChangeLN}
                    {...props}
                />
            </div>
            <div className="redAsterisk">&nbsp;{errorFN && <>{errorFN}</>}</div>
            <div className="redAsterisk">&nbsp;{errorLN && <>{errorLN}</>}</div>
        </div>
    )
}