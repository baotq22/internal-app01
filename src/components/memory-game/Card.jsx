import { useEffect, useState } from 'react';

export function Card({ cards, images, selectTwoCards, disabled, flipped }) {
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
        </div>
    )
}
