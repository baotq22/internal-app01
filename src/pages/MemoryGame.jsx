import { Card } from '../components/memory-game/Card'
import '../components/scss/MMG.scss'
import getLayout4 from '../assets/json/layout4.json'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import backButton from '../assets/img/thumb_back.png'

export default function MemoryGame() {
    const [play, setPlay] = useState(false)
    const [cards, setCards] = useState([])
    const [mark, setMark] = useState(0)
    const [firstSelect, setFirstSelect] = useState(null)
    const [secondSelect, setSecondSelect] = useState(null)

    // back to main menu
    const backToMain = () => {
        setPlay(false)
        setMark(0)
        setFirstSelect(null)
        setSecondSelect(null)
    }

    // shuffle card
    const shuffleCard = () => {
        setPlay(true)
        const shuffleAciton = [...getLayout4, ...getLayout4]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAciton)
    }

    // console.log(cards)

    // select 2 cards
    const selectTwoCards = (card) => {
        console.log(card)
        firstSelect ? setSecondSelect(card) : setFirstSelect(card)
    }

    // compare card
    useEffect(() => {
        if (firstSelect && secondSelect) {
            if (firstSelect.name === secondSelect.name) {
                console.log("same")
                ReFlip()
            } else {
                console.log("diff")
                ReFlip()
            }
        }
    }, [firstSelect, secondSelect])

    // reset after match
    const ReFlip = () => {
        setFirstSelect(null)
        setSecondSelect(null)
    }
    return (
        <>
            <div className="containerForPageGame">
                <div className="containerForPageBody">
                    {!play && <button onClick={shuffleCard}>New</button>}
                    {play &&
                        <>
                            <div className='topPage'>
                                <img src={backButton} width="50px" height="50px" onClick={backToMain}/>
                            </div>
                            <div className="card-container-4">
                                {cards.map((card) => (
                                    <Card
                                        key={card.id}
                                        images={card.src}
                                        cards={card}
                                        selectTwoCards={selectTwoCards}
                                        disabled={firstSelect === secondSelect}
                                    />
                                ))}
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}
