import React, { useContext, useEffect } from 'react'
import AllScoresContext from '../contexts/AllScoresContext';

const Pillars = () => {

  const {allScores, setAllScores} = useContext(AllScoresContext);

  return (
    <>
        <h1 className='flex justify-center items-center text-9xl font-bold'>Pillars.jsx</h1>
    </>
  )
}

export default Pillars
