import React from "react";

const PublishListItem = ({img, text, date}) => {
    return (
        <div className="publish-list-item">
            <img className="publish-list-item__img " src={img} />
            <div className="publish-list-item__data">
                <h5 className="publish-list-item__data-update">
                    <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.18173" cy="3.93417" r="3.09091" fill="#EB752B"/>
                    </svg>
                  Обновлено  
                </h5>
    <h6 className="publish-list-item__data-date">{date}</h6>
            </div> 
    <span className="publish-list-item__publish">{text}</span>
        </div>
    );
};

export default PublishListItem;