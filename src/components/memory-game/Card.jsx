import React from 'react';

export function CardFold() {
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

export function CardUnfold({ images }) {
    return (
        <div className="card-core">
            <div className='card-flex'>
                <div className="cardUnfold">
                    <div className="border">
                        <img src={images} height="180px" width="120px" alt="card back"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Card({ card }) {
    return (
        <div>
            <CardUnfold images={card} />
            <CardFold />
        </div>
    )
}
