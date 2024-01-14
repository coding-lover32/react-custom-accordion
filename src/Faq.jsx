import { useState } from "react";
import style from "./faq.module.css"

const Faq = ({faq}) => {
    const [isClicked, setIsClicked] = useState(false)


const {question, answer} = faq || {}

    const handleFaq = () => {

        setIsClicked(!isClicked)
    
    }
    
    return (
        <div className={style.faq}>
                    <div onClick={handleFaq} className={style.questionContainer} >
                    <h2>{question}</h2>
                    <h2>{isClicked ? "-" : "+"}</h2>
                    </div>
{
    isClicked && <p className={style.answer}>{answer}</p>
}
        </div>
    );
};

export default Faq;