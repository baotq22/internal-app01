import React, { useState } from 'react';

function CardHandle({ images, isFold, setIsFold }) {
    const defaultBack = 'src/assets/img/mystery-box.png'
    const handleCardClick = () => {
        setIsFold(!isFold)
    }
    return (
        <div className="card-core" onClick={handleCardClick}>
            <div className='card-flex'>
                <div className={isFold ? "cardFold" : "cardUnfold"}>
                    <div className={isFold ? "" : "border"}>
                        <img
                            src={isFold ? defaultBack : images}
                            height={isFold ? "210px" : "180px"}
                            width={isFold ? "150px" : "120px"}
                            alt={isFold ? "Front" : "back"}
                        />
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
            <CardHandle images={card} isFold={isFold} setIsFold={setIsFold} />
        </div>
    )
}
