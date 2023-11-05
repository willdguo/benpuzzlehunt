import AnswerBox from "./AnswerBox"

const WordCombo = () => {


    return (
        <div className = "puzzle">
            <h1> Combining Words </h1>
            Ngl this puzzle is pretty 
            [*most frequent sexuality*] [*direction opposite of backward*]

            <div>
                1. Type of animal that lives underwater <AnswerBox answer = "fish" id = "11" />
                2. Synonym of "magnificent" that is used colloquially to represent $1000 <AnswerBox answer = "grand" id = "12" />
                3. A letter that conveys someone else's loss. Usually capitalized. <AnswerBox answer = "L" id = "13" />
                4. Gordon Ramsey teaches you how to cook on this platform (no caps!) <AnswerBox answer = "masterclass" id = "14" />
                5. [*Answer from 2*][*First word of answer from 4*] is usually a good one (at least in Chess) <AnswerBox answer = "rank" id = "15" />
                6. Remove one and your BMI decreases. But remove both and your BMI increases! (answer is not plural) <AnswerBox answer = "leg" id = "16" />
                7. [*Answer from 1*][*Answer from 6*] <AnswerBox answer = "fin" id = "17" />
                Rearrange the characters of the 3 unused answers to get the final answer!
                <AnswerBox answer = "Franklin" id = "18" /> 
            </div>

        </div>
    )
}

export default WordCombo