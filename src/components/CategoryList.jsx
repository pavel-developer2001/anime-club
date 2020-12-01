import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
    return (
        <>
        <div className="category">
                <h4 className="category__name">Категории</h4>
                <span className="all-items">Все категории</span>
            </div>
        <div className="category-list">
            <CategoryListItem img="https://api.remanga.org/media/titles/mashle-magic-and-muscles/48e04d62a65362866201fc97cccdbf4e.jpg" text="Манга" />
            <CategoryListItem img="https://api.remanga.org/media/titles/how-the-demon-emperor-became-a-butler/high_cover.jpg" text="Маньхуа" />
            <CategoryListItem img="https://api.remanga.org/media/titles/blade-master-from-the-roof/0357514a9f539115b82cd96c1404bf26.jpg" text="Манхва" />
            <CategoryListItem img="https://api.remanga.org/media/titles/hero-with-another-opinion/34385c0279254080d7bdcf7f512cf64a.jpg" text="Рукомикс" />
            <CategoryListItem img="https://api.remanga.org/media/titles/the_beginning_after_the_end/high_cover.jpg" text="Западный комикс" />
        </div>
        </>
    )
}

export default CategoryList;