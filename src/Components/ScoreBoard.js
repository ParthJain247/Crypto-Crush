import { useState } from "react"
const ScoreBoard = ({ score }) => {
    const [highScore,setHighScore]=useState('0');

    const handleChange=()=>{
        if(score>highScore)setHighScore(score);
    }
    return (
      <div className="score-board flex justify-center items-center">
        <h2 className="text-white" onChange={()=>{handleChange()}}>Score:{score}</h2>
        <h2 className="text-white" >HighScore:{highScore}</h2>
      </div>
    )
  }
  
  export default ScoreBoard