import React from "react";
import CommentAddForm from "./CommentAddForm";
import CommentList from "./CommentList";

const Comment = () => {
    return (
        <div className="comment">
            <div className="comment__head">
                <div className="comment__head-counts">
                    <span className="comment__head-counts-title">Комментариев: </span>
                    <span className="comment__head-counts-number">32</span>
                </div>
                <div className="comment__btn btn-component">Добавить Комментарий</div>
            </div>
            <CommentList />
            <CommentAddForm />
        </div>
    );
};
export default Comment;