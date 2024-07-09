import { useState } from 'react';

export function Card({ cards, images, selectTwoCards, disabled }) {
    const [isFold, setIsFold] = useState(true)
    const defaultBack = 'src/assets/img/mystery-box.png'
    const handleCardClick = () => {
        setIsFold(!isFold)
        selectTwoCards(cards)
    }
    const handleCardClickNoFlip = () => {
        setIsFold(!isFold)
    }
    return (
        <div>
            <div className="card-core" onClick={isFold ? handleCardClick : handleCardClickNoFlip }>
                <div className='card-flex'>
                    <div className={isFold ? "cardFold" : "cardUnfold"}>
                        <div className={isFold ? "" : "border"}>
                            <img
                                src={isFold ? defaultBack : images}
                                height={isFold ? "210px" : "180px"}
                                width={isFold ? "150px" : "120px"}
                                alt={isFold ? "Front" : "back"}
                                disabled={disabled}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
