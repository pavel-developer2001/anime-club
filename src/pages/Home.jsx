import React from "react";
import Announce from "../components/Announce";
import ArticleList from "../components/ArticleList";
import CategoryList from "../components/CategoryList";
import ComicsList from '../components/ComicsList';
import Footer from "../components/Footer";
import PublishList from "../components/PublishList";
import Question from "../components/Question";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <>
        <Sidebar />
        <div className="home">
            <ComicsList />
            <CategoryList />
            <PublishList />
            <ArticleList />
            <div className="home-grid">
                <Announce />
                <Question />
            </div>
            <Footer />   
        </div>
        </>
    );
};

export default Home;