import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AllScoresContext from '../contexts/AllScoresContext';
import PlayerScoreCard from './PlayerScoreCard';
import bgVideo from "../../assets/leaderboard-bg.mp4";

const Scores = () => {

  const { team } = useParams();
  const { allScores, setAllScores } =  useContext(AllScoresContext);

  useEffect(() => {
      if(allScores[team]) {

        const players = [...allScores[team]];

        const isSorted = players.every((player, index, array) => {
            if (index === 0) return true;
            return array[index - 1].score >= player.score;
        });

        if(!isSorted) {
            players.sort((a, b) => b.score - a.score);
            let rank =1;
            for (let i = 0; i < players.length; i++) {
                if (i > 0 && players[i].score === players[i - 1].score) {
                    players[i].rank = players[i - 1].rank;
                } else {
                    players[i].rank = rank;
                    rank++;
                }
            }
    
            setAllScores((prevScores) => ({
                ...prevScores,
                [team]: players
            }));
        }
    }
  }, [team, setAllScores, allScores]);


  return (
    <>
    {
        !allScores[team] ? <><h1 className='text-9xl font-bold text-center'>Loading...</h1></> :
        <>
            <div className="bg-container">
                <video autoplay loop muted playsinline class="bg-video">
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="team-header">
                    <h1 className='team-name text-7xl font-bold text-center py-4 mx-auto tracking-widest flex justify-center items-center'>
                        <span className="team-fname bg-red-700 inline-flex justify-center items-center">{team.split('_')[0].toUpperCase()}</span>
                        &nbsp;
                        <span className="team-lname inline-flex justify-center items-center">{team.split('_')[1].toUpperCase()}</span>
                    </h1>
                </div>
                <div className="flex justify-center">
                    <table className="player-scores w-4/5">
                        <thead>
                            <PlayerScoreCard header={true} player={{name: "TEAM NAME", score: "SCORE", rank: "RANK"}} />
                        </thead>
                        <tbody>
                            {
                                allScores[team].map((player, index) => {
                                    return <PlayerScoreCard key={index} player={player} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    }
    </>
  )
}

export default Scores
