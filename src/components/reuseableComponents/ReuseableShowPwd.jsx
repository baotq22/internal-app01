export default function ReuseableShowPwd({src, value, onClick}) {
    return (
        <div className="pwdAppearContainer">
            <img 
                src={src} 
                className='pwdLogo' 
                value={value}
                onClick={onClick}
            />
        </div>
    )
}