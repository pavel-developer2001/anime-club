import React from 'react';
import ComicsListItem from './ComicsListItem';

const ComicsList = () => {
    return (
        <>
         <div className="category">
                <h4 className="category__name">Комиксы</h4>
                <span className="all-items">Все комиксы</span>
            </div>
        <div className="comicsList">
            <ComicsListItem />
            <ComicsListItem />
            <ComicsListItem />
            <ComicsListItem />
        </div>
        </>
    );
};
export default ComicsList;