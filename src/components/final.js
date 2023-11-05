import { useState, useEffect } from "react"
import AnswerBox from "./AnswerBox"

const FinalPuzzle = () => {

    const [valid, setValid] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('18') && localStorage.getItem('55') && localStorage.getItem('39')){
            setValid(true)
        }
    }, [])

    const mainPuzzle = () => (
        <div>
            <h2> Home Stretch </h2>

            The answer to this puzzle follows the same pattern as the past 3 puzzles.

            <p> Your only hint: basketball player, last name only. </p>

            <AnswerBox answer = "Simmons" id = "61"/>
            
        </div>
    )

    return (
        <div>
            {valid
            ? mainPuzzle()
            : <p> Return to this puzzle when you've gotten all the answers </p>
            }
        </div>
    )

}

export default FinalPuzzle