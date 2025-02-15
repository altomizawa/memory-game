'use client'

import Image from "next/image";
import { useState, useEffect, use } from 'react';

export default function Home() {
  const [initialArray, setInitialArray] = useState([])
  const [pair, setPair] = useState([])
  const [drawnCards, setDrawnCards] = useState([])
  const [score, setScore] = useState(0)

  const cards = [
    {
      id: 1,
      name: "card1",
      link: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "card2",
      link: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "card3",
      link: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "card4",
      link: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "card5",
      link: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "card6",
      link: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      name: "card1",
      link: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "card2",
      link: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "card3",
      link: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 10,
      name: "card4",
      link: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 11,
      name: "card5",
      link: "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 12,
      name: "card6",
      link: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  

  function handleClick(card) {
    setScore(score + 1)
    console.log(card.name, pair)
    setPair([...pair, card])

    if (pair.length === 2) {
      setPair([])
      setPair([card])
    }
    else if (pair[0]?.name===card.name) {
      console.log('match')
      setDrawnCards([...drawnCards, pair[0], card])
      setPair([])
    }
    else {
      setPair([...pair, card])
    }
  }

  useEffect(() => {
    function shuffleArray(array) {
      const shuffledArray = array.sort(() => Math.random() - 0.5)
      setInitialArray(shuffledArray)
    }
    shuffleArray(cards)
  }, [])

  useEffect(() => {
    if (drawnCards.length === cards.length) {
      alert('You win!')
    }
  }, [pair])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-4xl font-bold text-center">MEMORY GAME</h1>
        <h2>SCORE: {score}</h2>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className='grid grid-cols-4 gap-4 overflow-hidden h-[600px]'> 
          {initialArray.map((card) => {
            return (
              <button key={card.id} className={`relative w-[150px] aspect-square`} onClick={() => handleClick(card)}>
                <Image 
                   key={card.id} 
                   onDragStart={function () {return false }}
                   priority={true}
                   onClick={() => handleClick(card)} src={pair.includes(card) || drawnCards.includes(card) ? card.link : "https://images.unsplash.com/vector-1738925309072-35f6288f3778?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                   alt={card.name}
                   width={150}
                   height={150}
                   className='rounded-lg object-cover w-full h-full border-2' />
                {/* <p className='uppercase font-bold text-center border-2 w-full h-full rounded-lg aspect-square flex items-center justify-center'>{pair.includes(card) || drawnCards.includes(card) ? card.name : '0'}</p> */}
              </button>
            );
          })}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full" onClick={() => window.location.reload()}>RESTART</button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made by Al Tomizawa</p>
      </footer>
    </div>
  );
}
