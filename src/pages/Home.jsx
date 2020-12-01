import React from "react";
import CategoryList from "../components/CategoryList";
import ComicsList from '../components/ComicsList';
import PublishList from "../components/PablishList";

const Home = () => {
    return (
        <div className="home">
            <ComicsList />
            <CategoryList />
            <PublishList />
        </div>
    );
};

export default Home;