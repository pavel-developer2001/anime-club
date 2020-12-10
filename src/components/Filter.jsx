import React from "react";

const Params = () => {
    return (
        <>
            <div className="filter__cat-params">
                    <div className="filter__cat-params-cont" >
                        <span className="filter__cat-params-name">Статьи</span>
                    </div>
                    <label class="container">
                    <input type="checkbox" className="filter__cat-params-check" />
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className="filter__cat-params">
                    <div className="filter__cat-params-cont" >
                        <span className="filter__cat-params-name">Новости</span>
                    </div>
                    <label class="container">
                    <input type="checkbox" className="filter__cat-params-check" />
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className="filter__cat-params">
                    <div className="filter__cat-params-cont" >
                        <span className="filter__cat-params-name">Обзоры</span>
                    </div>
                    <label class="container">
                    <input type="checkbox" className="filter__cat-params-check" />
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className="filter__cat-params">
                    <div className="filter__cat-params-cont" >
                        <span className="filter__cat-params-name">Подслушано</span>
                    </div>
                    <label class="container">
                    <input type="checkbox" className="filter__cat-params-check" />
                    <span class="checkmark"></span>
                    </label>
                </div>
        </>
    )
}

const Filter = () => {
    const [active, setActive] = React.useState(false)
    return (
        <div className="filter">
            <span className="filter__title">Фильтр по результатам</span>
            <div className="filter__cat">
                <span className="filter__cat-name">Публикации</span>
                <span className="filter__cat-count">(2)</span>
                {!active &&<svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                {active && <svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1L13 7" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}

                {active &&<Params />}
               
            </div>
            <div className="filter__cat">
                <span className="filter__cat-name">Мероприятия</span>
                <span className="filter__cat-count">(2)</span>
                {!active &&<svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                {active && <svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1L13 7" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}

                {active &&<Params />}
               
            </div>
            <div className="filter__cat">
                <span className="filter__cat-name">Заведения</span>
                <span className="filter__cat-count">(2)</span>
                {!active &&<svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
                {active && <svg onClick={() => setActive(!active)} className="filter__cat-icon" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1L13 7" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}

                {active &&<Params />}
               
            </div>
            <div className="filter__btn btn-component">Применить</div>
        </div>
    );
};

export default Filter;
