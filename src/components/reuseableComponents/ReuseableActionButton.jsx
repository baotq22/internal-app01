export default function ReuseableActionButton({type, disabledClass, disabled, label}) {
    return (
        <button
            type={type}
            className={disabledClass ? "action-button" : "action-button-disabled"}
            disabled={disabled}
        >
            {label}
        </button>
    )
}