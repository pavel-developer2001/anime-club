import React from "react";
import AnnounceList from "./AnnounceList";

const Announce = () => {
    return (
        <div className="announce">
            <div className="announce__head">
                <span className="announce__head-title">Свежие объявления 🔥</span>
                <span className="announce__head-all all">Смотреть больше</span>
            </div>
            <AnnounceList/>
        </div>
    );
};

export default Announce;