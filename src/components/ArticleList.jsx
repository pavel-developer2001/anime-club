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
                <div className="article-list-btn btn-component">
                    <svg className="btn-component-icon" width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 9C1.5 9 5.5 1 12.5 1C19.5 1 23.5 9 23.5 9C23.5 9 19.5 17 12.5 17C5.5 17 1.5 9 1.5 9Z" stroke="#EB752B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5 12C14.1569 12 15.5 10.6569 15.5 9C15.5 7.34315 14.1569 6 12.5 6C10.8431 6 9.5 7.34315 9.5 9C9.5 10.6569 10.8431 12 12.5 12Z" stroke="#EB752B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    Больше публикации
                </div>
            </div>
            
        </div>
    )
}
export default ArticleList;