import React from 'react';

const ComicsListItem = () => {
    return (
        <div className="comicsListItem">
            <div className="comicsListItem__cover">
                <img className="comicsListItem__cover-img" src="https://api.remanga.org/media/titles/martial_peak/8ab53678618b0b0fb7f7c74f762c4a94.jpg" />
                <p className="comicsListItem__cover-cat">Маньхуа</p>
                <span className="comicsListItem__cover-rating">5.0</span>
            </div>
            <div className="comicsListItem__title">Пик боевых искусств</div>
            <div className="comicsListItem__category">
                <p className="comicsListItem__category-tag">Алхимия</p>
                <p className="comicsListItem__category-tag">Культивация</p>
                <p className="comicsListItem__category-tag">В цвете</p>
            </div>
            <div className="comicsListItem__text">
                На основе одноименного романа. Путь на вершину боевых искусств - ...
            </div>
            <div className="comicsListItem__btn">Подробнее</div>
        </div>
    );
};
export default ComicsListItem;