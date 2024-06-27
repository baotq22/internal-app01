export default function ReuseableShowPwd({src, value, onClick}) {
    return (
        <>
            <img 
                src={src} 
                className='pwdAppear' 
                value={value}
                onClick={onClick}
            />
        </>
    )
}