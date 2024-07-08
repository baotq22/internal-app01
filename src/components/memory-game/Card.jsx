import React, { useState } from 'react';

function CardFold() {
    return (
        <div className="card-core">
            <div className='card-flex'>
                <div className="cardFold">
                    <img src='src/assets/img/mystery-box.png' height="210px" width="150px" alt="card fold"/>
                </div>
            </div>
        </div>
    )
}

function CardUnfold({ images, isFold, setIsFold }) {
    const defaultBack = 'src/assets/img/mystery-box.png'
    const handleCardClick = () => {
        setIsFold(!isFold)
    }
    return (
        <div className="card-core" onClick={handleCardClick}>
            <div className='card-flex'>
                <div className="cardUnfold">
                    <div className="border">
                        <img src={isFold ? defaultBack : images} height="180px" width="120px" alt="card back"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Card({ card }) {
    const [isFold, setIsFold] = useState(true)
    return (
        <div>
            <CardUnfold images={card} isFold={isFold} setIsFold={setIsFold}/>
        </div>
    )
}
