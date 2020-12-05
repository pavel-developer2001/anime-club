import React from 'react';
import ComicsListItem from './ComicsListItem';
import Carousel from 'react-elastic-carousel'

const ComicsList = () => {
    return (
        <>
         <div className="category">
                <h4 className="category__name">Комиксы</h4>
                <span className="all-items">Все комиксы</span>
            </div>
        <div className="comicsList">
            <Carousel itemsToShow={4}>
                <ComicsListItem />
                <ComicsListItem />
                <ComicsListItem />
                <ComicsListItem />
                <ComicsListItem />
                <ComicsListItem />
            </Carousel>

        </div>
        </>
    );
};
export default ComicsList;