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
import Warning from '../assets/svg/warning.svg'
import Success from '../assets/audio/success.mp3'
import Failed from '../assets/audio/failed.mp3'
import GameOver from '../components/memory-game/GameOver'

function Dimensions() {
    const [heightScreen, setHeightScreen] = useState({ height: window.innerHeight })

    useEffect(() => {
        const handleHeight = () => {
            setHeightScreen({
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleHeight)
        return () => window.removeEventListener('resize', handleHeight)
    }, [])

    return heightScreen
}

export default function MemoryGame() {
    const [play, setPlay] = useState(false)
    const [cards, setCards] = useState([])
    const [layout, setLayout] = useState(0)
    const [mark, setMark] = useState(0)
    const [firstSelect, setFirstSelect] = useState(null)
    const [secondSelect, setSecondSelect] = useState(null)
    const [time, setTime] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const { height } = Dimensions();

    const successPlay = new Audio(Success)
    const failedPlay = new Audio(Failed)

    // back to main menu
    const backToMain = () => {
        setPlay(false)
        setMark(0)
        setTime(0)
        setFirstSelect(null)
        setSecondSelect(null)
        setGameOver(false)
    }

    const timerByLayout = (layout) => {
        let timer
        switch (layout) {
            case 4:
                timer = 3 * 60
                break;
            case 6:
                timer = 7 * 60
                break;
            case 8:
                timer = 12 * 60
                break;
            case 10:
                timer = 19 * 60
                break;
            default:
                timer = 0
        }
        setTime(timer)
    }

    // shuffle card
    const shuffleCard4 = () => {
        setPlay(true)
        setLayout(4)
        timerByLayout(4)
        const shuffleAction = [...getLayout4, ...getLayout4]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAction)
    }
    const shuffleCard6 = () => {
        setPlay(true)
        setLayout(6)
        timerByLayout(6)
        const shuffleAction = [...getLayout6, ...getLayout6]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAction)
    }
    const shuffleCard8 = () => {
        setPlay(true)
        setLayout(8)
        timerByLayout(8)
        const shuffleAction = [...getLayout8, ...getLayout8]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAction)
    }
    const shuffleCard10 = () => {
        setPlay(true)
        setLayout(10)
        timerByLayout(10)
        const shuffleAction = [...getLayout10, ...getLayout10]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: uuidv4() }))

        setCards(shuffleAction)
    }

    // select 2 cards
    const selectTwoCards = (card) => {
        firstSelect ? setSecondSelect(card) : setFirstSelect(card)
    }

    // compare card
    useEffect(() => {
        if (firstSelect && secondSelect) {
            if (firstSelect.name === secondSelect.name) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.name === firstSelect.name) {
                            setMark(prevMarks => prevMarks + 0.5)
                            successPlay.play()
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                ReFlip()
            } else {
                failedPlay.play()
                ReFlip()
            }
        }
    }, [firstSelect, secondSelect])

    console.log(cards)

    // reset after match
    const ReFlip = () => {
        setFirstSelect(null)
        setSecondSelect(null)
    }

    useEffect(() => {
        if (time > 0 && play) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000)
            return () => clearInterval(timer)
        } else if (time === 0 & play) {
            setGameOver(true);
        }
    }, [time, play])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    return (
        <>
            {height < 1290 &&
                <div className="warningDimension">
                    <img src={Warning} alt="" className='warning' />
                    <span>On 10x10 Layout, you should resize your browser window or zoom out browser page to get better experience</span>
                </div>
            }
            <GameOver
                isGameOver={{ display: gameOver ? 'flex' : '' }}
                back={backToMain}
            />
            <div className="containerForPageGame">
                <div className="containerForPageBody">
                    {!play &&
                        <NewGame
                            onClick4={shuffleCard4}
                            onClick6={shuffleCard6}
                            onClick8={shuffleCard8}
                            onClick10={shuffleCard10}
                        />}
                    <div className="card-element">
                    {play && <div className='topPage'>
                        <img className='backBtn' src={backButton} width="50px" height="50px" onClick={backToMain} />
                        <div className='mark'>Score: {mark}</div>
                        <div className='timer'>Time Left: {formatTime(time)}</div>
                    </div>}
                        {play && layout == 4 &&
                            <>
                                <div className="card-element"></div>
                                <div className="card-container-4">
                                    {cards.map((card) => (
                                        <Card
                                            key={card.id}
                                            images={card.src}
                                            cards={card}
                                            selectTwoCards={selectTwoCards}
                                            disabled={card.matched == true}
                                        />
                                    ))}
                                </div>
                            </>
                        }
                        {play && layout == 6 &&
                            <>
                                <div className="card-container-6">
                                    {cards.map((card) => (
                                        <Card
                                            key={card.id}
                                            images={card.src}
                                            cards={card}
                                            selectTwoCards={selectTwoCards}
                                            disabled={card.matched == true}
                                        />
                                    ))}
                                </div>
                            </>
                        }
                        {play && layout == 8 &&
                            <>
                                <div className="card-container-8">
                                    {cards.map((card) => (
                                        <Card
                                            key={card.id}
                                            images={card.src}
                                            cards={card}
                                            selectTwoCards={selectTwoCards}
                                            disabled={card.matched == true}
                                        />
                                    ))}
                                </div>
                            </>
                        }
                        {play && layout == 10 &&
                            <>
                                <div className="card-container-10">
                                    {cards.map((card) => (
                                        <Card
                                            key={card.id}
                                            images={card.src}
                                            cards={card}
                                            selectTwoCards={selectTwoCards}
                                            disabled={card.matched == true}
                                        />
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
