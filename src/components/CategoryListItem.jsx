import React from "react";

const CategoryListItem = ({img, text}) => {
    return (
        <div className="category-list-item">
            <img className="category-list-item__back" src={img} />
            <p className="category-list-item__types">{text}</p>
        </div>
    )
}

export default CategoryListItem;