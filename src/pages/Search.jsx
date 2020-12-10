import React from "react";
import Filter from "../components/Filter";
import {Link} from "react-router-dom";

const Search = () => {
    const [active, setActive] = React.useState(false)
    return (
        <div className="search">
            <div className="search__back">
                <svg className="search__back-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link to="/" ><span className="search__back-text">Назад</span></Link>
            </div>
            <div className="search__content">
                <div className="search__content-head">
                    <svg className="search__content-head-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 17C6.58172 17 3 13.4183 3 9C3 4.58172 6.58172 1 11 1C15.4183 1 19 4.58172 19 9C19 13.4183 15.4183 17 11 17Z" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.0001 18.9999L5.3501 14.6499" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Поиск" className="search__content-head-input" />

                    {!active && <svg onClick={() => setActive(!active)} className="search__content-head-input-icon"  width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19V12" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 8V1" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19V10" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V1" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 19V14" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 10V1" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 12H7" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6H15" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 14H23" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}

                    {active && <svg onClick={() => setActive(!active)} className="search__content-head-input-icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 19L1 1" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.999999 19L17 1" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}

                </div>
                <div className="search__content-tags">
                    <div className="search__content-tags-tag">
                        <span className="search__content-tags-tag-item">#Аниме</span>
                        <span className="search__content-tags-tag-item">#Манга</span>
                        <span className="search__content-tags-tag-item">#Музыка</span>
                        <span className="search__content-tags-tag-item">#Манхва</span>
                        <span className="search__content-tags-tag-item">#Маньхуа</span>
                        <span className="search__content-tags-tag-item">#Комиксы</span>
                        <span className="search__content-tags-tag-item">#Топ5</span>
                    </div>
                    <span className="search__content-tags-tag-count">+ 105</span>
                </div>
                {active && <Filter />}
            </div>
        </div>
    );
};
export default Search;