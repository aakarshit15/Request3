import React from 'react'

const PlayerScoreCard = (props) => {
  return (
    <>
        <tr className={`player-score-card ${props.header && "table-head"}`}>
            <td className={`w-1/3 py-3 text-center tracking-wider ${props.header ? "text-5xl" : "text-3xl"}`}>{props.player.name}</td>
            <td className={`w-1/3 py-3 text-center ${props.header ? "text-5xl" : "text-3xl"}`}>{props.player.score}</td>
            <td className={`name w-1/3 py-3 text-center ${props.header ? "text-5xl" : "text-3xl"}`}>{props.player.rank}</td>
        </tr>
    </>
  )
}

export default PlayerScoreCard
