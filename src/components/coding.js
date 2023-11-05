import AnswerBox from './AnswerBox'
import img2 from '../images/Screenshot 2023-11-04 at 9.36.23 PM.png'
import img1 from '../images/Screenshot 2023-11-04 at 9.36.48 PM.png'

const Coding = () => {

    return (
        <div className = "puzzle">
            <h2> What does this program do? </h2>
            <p> Nothing like python/pseudocode to celebrate your last teenage year </p>
            <p> Assume all helper functions and variables not defined here are defined earlier. </p>
            
            <div className = "images">
                <img src = {img1} />
                <img src = {img2} />
            </div>


            <div>
                answer1: <AnswerBox answer = "2" id = "51" />
                answer2: <AnswerBox answer = "4" id = "52" />
                answer3: <AnswerBox answer = "1" id = "53" />
                answer4: <AnswerBox answer = "25" id = "54" />
                final answer: <AnswerBox answer = "10" id = "55"/>
            </div>
            
        </div>
    )

}

export default Coding