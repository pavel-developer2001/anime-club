import React from "react";
import ArticleList from "../components/ArticleList";
import CategoryList from "../components/CategoryList";
import ComicsList from '../components/ComicsList';
import PublishList from "../components/PublishList";

const Home = () => {
    return (
        <div className="home">
            <ComicsList />
            <CategoryList />
            <PublishList />
            <ArticleList />
        </div>
    );
};

export default Home;