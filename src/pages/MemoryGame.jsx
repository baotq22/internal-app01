import { Card } from '../components/memory-game/Card'
import '../components/scss/MMG.scss'
import getLayout4 from '../assets/json/layout4.json'
import getLayout6 from '../assets/json/layout6.json'
import getLayout8 from '../assets/json/layout8.json'
import getLayout10 from '../assets/json/layout10.json'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import backButton from '../assets/img/thumb_back.png'
import NewGame from '../components/memory-game/NewGame'

export default function MemoryGame() {
    const [play, setPlay] = useState(false)
    const [cards, setCards] = useState([])
    const [layout, setLayout] = useState(0)
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
    const shuffleCard4 = () => {
        setPlay(true)
        setLayout(4)
        const shuffleAciton = [...getLayout4, ...getLayout4]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAciton)
    }
    const shuffleCard6 = () => {
        setPlay(true)
        setLayout(6)
        const shuffleAciton = [...getLayout6, ...getLayout6]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAciton)
    }
    const shuffleCard8 = () => {
        setPlay(true)
        setLayout(8)
        const shuffleAciton = [...getLayout8, ...getLayout8]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAciton)
    }
    const shuffleCard10 = () => {
        setPlay(true)
        setLayout(10)
        const shuffleAciton = [...getLayout10, ...getLayout10]
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
                    {!play &&
                        <NewGame
                            onClick4={shuffleCard4}
                            onClick6={shuffleCard6}
                            onClick8={shuffleCard8}
                            onClick10={shuffleCard10}
                        />}
                    {play && layout == 4 &&
                        <>
                            <div className='topPage'>
                                <img src={backButton} width="50px" height="50px" onClick={backToMain} />
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
                        </>
                    }
                    {play && layout == 6 &&
                        <>
                            <div className='topPage'>
                                <img src={backButton} width="50px" height="50px" onClick={backToMain} />
                            </div>
                            <div className="card-container-6">
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
                        </>
                    }
                    {play && layout == 8 &&
                        <>
                            <div className='topPage'>
                                <img src={backButton} width="50px" height="50px" onClick={backToMain} />
                            </div>
                            <div className="card-container-8">
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
                        </>
                    }
                    {play && layout == 10 &&
                        <>
                            <div className='topPage'>
                                <img src={backButton} width="50px" height="50px" onClick={backToMain} />
                            </div>
                            <div className="card-container-10">
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
                        </>
                    }
                </div>
            </div>
        </>
    )
}
