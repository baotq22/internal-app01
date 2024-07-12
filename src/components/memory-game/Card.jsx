import { useEffect, useState } from 'react';

export function Card({ cards, images, selectTwoCards, disabled, flipped, isFlipped2Cards }) {
    const [isFold, setIsFold] = useState(true)
    const defaultBack = 'src/assets/img/mystery-box.png'
    useEffect(() => {
        setIsFold(!flipped)
    }, [flipped])

    const handleCardClick = () => {
        if (!disabled && isFold) {
            selectTwoCards(cards)
        }
    }
    return (
        <div>
            <div className="card-core" onClick={!isFlipped2Cards ? handleCardClick : ''}>
                <div className='card-flex'>
                    <div className={isFold && !isFlipped2Cards ? "cardFold" : "cardUnfold"}>
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
        </div>
    )
}
