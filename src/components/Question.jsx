import React from "react";
import QuestionList from "./QuestionList";

const Question = () => {
    return (
        <div className="question">
            <div className="question__head">
                    <span className="question__head-title">Вопросы и ответы</span>
                    <span className="question__head-all all">Смотреть больше</span>
            </div>
            <QuestionList />
        </div>
    );
};

export default Question;