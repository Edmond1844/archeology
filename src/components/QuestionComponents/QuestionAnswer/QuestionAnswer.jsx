import questionsList from '../../../data/questions.js';

import Question from '../Question/Question.jsx';

function QuestionAnswer() {
    return (
        <>
            {
                questionsList.map((questionItem) => (
                    <Question key={questionItem.id} question={questionItem.question} answer={questionItem.answer} isActive={questionItem.isActive}/>
                ))
                
            }
        </>
    )
}

export default QuestionAnswer;
