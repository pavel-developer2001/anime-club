import React from "react";
import ArticleListItem from "./ArticleListItem";
import ArticleListMain from "./ArticleListMain";

const ArticleList = () => {
    return (
        <div className="article-list">
            <ArticleListMain />
            <div className="article-list-group">
                <ArticleListItem />
            {/* <ArticleListItem />
            <ArticleListItem />
            <ArticleListItem /> */}
            </div>
            
        </div>
    )
}
export default ArticleList;