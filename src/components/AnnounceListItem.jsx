import React from "react";

const AnnounceListItem = () => {
    return (
        <div className="announce-list-item">
            <img className="announce-list-item__avatar" src="https://pm1.narvii.com/6909/b8fa989cfa666e4d66ed32416d1ae3c19f49a6c6r1-1080-992v2_hq.jpg" />
            <div className="announce-list-item__content">
                <span className="announce-list-item__content-title">Весь хайп манги Deamon Slayer.</span>
                <p className="announce-list-item__content-text">манга "Demon Slayer: Kimetsu no Yaiba", которая во второй половине 2019 года получила внезапный и головокружительный успех.</p>
                <span className="announce-list-item__content-date">1 час назад</span>
            </div>
        </div>
    );
};

export default AnnounceListItem;