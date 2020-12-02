import React from "react";

const CommentAddForm = () => {
    return (
        <div className="comment-add-form">
            <img className="comment-add-form__avatar" src="https://philbride.com/wp-content/uploads/2019/11/dreamstime_xxl_29307714.jpg" />
            <input className="comment-add-form__input" type="text" placeholder="Оставить комментарий"/>
            <div className="comment-add-form__btn btn-component">Отправить</div>
        </div>
    );
};
export default CommentAddForm;