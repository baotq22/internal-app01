export default function Modal({isModal, back, label, content}) {
  return (
    <>
      <div className="modalOverlay" style={isModal}>
        <div className='modal-game'>
          <div className="img-block"><img className='img' src={label} alt="" /></div>
          <div className='content'>{content}</div>
          <div className="btn-back"><button className='btn' onClick={back}>OK</button></div>
        </div>
      </div>
    </>
  )
}
