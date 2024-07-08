import { Card } from '../components/memory-game/Card'
import '../components/scss/MMG.scss'
import getLayout4 from '../assets/json/layout4.json'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function MemoryGame() {
    const [cards, setCards] = useState([])
    const [mark, setMark] = useState(0)
    const [firstSelect, setFirstSelect] = useState(null)
    const [secondSelect, setSecondSelect] = useState(null)
    const shuffleCard = () => {
        const shuffleAciton = [...getLayout4, ...getLayout4]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAciton)
        setMark(0)
    }

    console.log(cards)
    return (
        <>
            <div className="containerForPageGame">
                <div className="containerForPageBody">
                    <button onClick={shuffleCard}>New</button>
                    <div className="card-container-4">
                        {cards.map((card) => (
                            <Card key={card.id} card={card.src} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
