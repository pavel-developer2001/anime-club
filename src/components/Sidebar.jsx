import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h3 className="logo__text">animeclub</h3>
                <svg className="logo__img" width="200" height="207" viewBox="0 0 200 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M177.099 77.5991L176.975 77.4753C176.965 77.4684 176.957 77.4591 176.952 77.4484L99.5059 0L22.0602 77.4464C22.0513 77.4554 22.0463 77.4674 22.0373 77.4733L21.9095 77.5971C10.067 89.5061 2.54491 105.032 0.53912 121.707C-1.46667 138.382 2.15891 155.249 10.8395 169.627C19.5201 184.005 32.7575 195.069 48.4475 201.059C64.1374 207.049 81.3795 207.623 97.4327 202.688C98.7836 202.275 100.227 202.275 101.578 202.688C117.63 207.621 134.871 207.047 150.56 201.056C166.249 195.065 179.485 184.002 188.165 169.625C196.845 155.248 200.471 138.382 198.466 121.708C196.461 105.034 188.94 89.5082 177.099 77.5991ZM49.5989 128.67C49.2219 129.047 48.9229 129.495 48.719 129.987C48.515 130.479 48.41 131.007 48.4101 131.54C48.5479 145.209 52.4109 158.581 59.5833 170.218C59.7462 170.482 59.8215 170.791 59.7984 171.1C59.7753 171.409 59.655 171.703 59.4546 171.94C59.2543 172.177 58.9842 172.344 58.683 172.418C58.3818 172.492 58.0649 172.469 57.7777 172.352C52.3857 170.084 47.4873 166.787 43.3565 162.646C34.8911 154.179 30.132 142.698 30.1243 130.725C30.1166 118.752 34.861 107.265 43.3156 98.7877L99.5059 42.6026L155.693 98.7877C164.149 107.264 168.895 118.751 168.887 130.725C168.88 142.698 164.12 154.179 155.654 162.646C151.523 166.787 146.625 170.084 141.234 172.352C140.946 172.469 140.629 172.492 140.328 172.418C140.027 172.344 139.757 172.176 139.556 171.94C139.356 171.703 139.235 171.409 139.212 171.099C139.189 170.79 139.264 170.481 139.427 170.217C146.601 158.581 150.466 145.209 150.606 131.54C150.606 131.007 150.5 130.479 150.295 129.986C150.09 129.493 149.79 129.046 149.412 128.669L122.835 100.479C122.57 100.258 122.237 100.137 121.892 100.137C121.548 100.137 121.214 100.258 120.95 100.479C120.685 100.699 120.507 101.006 120.445 101.345C120.383 101.684 120.442 102.033 120.612 102.333C130.934 121.012 122.058 147.842 107.256 162.646L107.178 162.724C105.135 164.745 102.377 165.878 99.5039 165.877C96.63 165.876 93.8727 164.741 91.8312 162.719L91.7593 162.646C76.9519 147.842 68.0805 121.015 78.4042 102.337C78.5739 102.037 78.6331 101.688 78.5713 101.349C78.5096 101.01 78.3309 100.703 78.0664 100.483C77.8019 100.262 77.4684 100.141 77.1239 100.141C76.7794 100.141 76.4458 100.262 76.1813 100.483L49.5989 128.67Z" fill="#F53855"/>
                </svg>

            </div>
            <div className="search">
                <svg className="search__icon" width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4167 23.9167C9.15744 23.9167 4.08333 18.8426 4.08333 12.5833C4.08333 6.32411 9.15744 1.25 15.4167 1.25C21.6759 1.25 26.75 6.32411 26.75 12.5833C26.75 18.8426 21.6759 23.9167 15.4167 23.9167Z" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.24998 26.7499L7.41248 20.5874" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="search__text">Поиск</span>
            </div>
            <div className="select">
            <select>
                <option>Москва</option>
                <option>Минск</option>
                </select>
            </div>
            <div className="menu">
                <div className="menu__item">
                    <svg className="menu__item-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20.9165L11 1.08317" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.08337 11H20.9167" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="menu__item-text">Публикации</span>
                    <span className="menu__item-count">284</span>
                </div>
                <div className="menu__item">
                    <svg className="menu__item-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20.9165L11 1.08317" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.08337 11H20.9167" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="menu__item-text">Мероприятия</span>
                    <span className="menu__item-count">284</span>
                </div>
                <div className="menu__item">
                    <svg className="menu__item-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20.9165L11 1.08317" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.08337 11H20.9167" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="menu__item-text">Объявления</span>
                    <span className="menu__item-count">284</span>
                </div>
            </div>
            <div className="answer">
                Ответы
            </div>
            <div className="person">
                <img className="person__avatar" src="http://ex-news.com/wp-content/uploads/2018/10/Depositphotos_57216693_xl-2015-1.jpg"/>
                <div className="person__info">
                    <h7 className="person__name">Мой профиль</h7>
                    <span className="person__exit">Выйти с аккаунта</span>
                </div>
                <svg className="person__notifications" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 20C11.7968 20.3042 11.505 20.5566 11.154 20.7321C10.803 20.9076 10.4051 21 10 21C9.59494 21 9.19698 20.9076 8.84598 20.7321C8.49498 20.5566 8.20325 20.3042 8 20" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="add-ad">
                <svg className="add-ad__icon" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z" stroke="#10121B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 7V15" stroke="#10121B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 11H15.5" stroke="#10121B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="add-ad__text">Разместить объявление</span>    
            </div>
        </div>
    );
};

export default Sidebar;