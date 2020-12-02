import React from "react";
import CommentListItem from "./CommentListItem";

const CommentList = () => {
    return (
        <div className="comment-list">
            <CommentListItem />
            <CommentListItem />
            <CommentListItem />
        </div>
    );
};
export default CommentList;