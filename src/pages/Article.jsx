import React from "react";
import Comment from "../components/Comment";
import More from "../components/More";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Article = () => {
    return (
        <>
        <Sidebar />
        <div className="article">
            <div className="article-pos">
                <div className="article-pos__icons">
                    <svg className="article-pos__icons-rec" width="23" height="25" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 9C25.4853 9 27.5 6.98528 27.5 4.5C27.5 2.01472 25.4853 0 23 0C20.5147 0 18.5 2.01472 18.5 4.5C18.5 6.98528 20.5147 9 23 9Z" fill="#10121B"/>
                    <path d="M5 19.5C7.48528 19.5 9.5 17.4853 9.5 15C9.5 12.5147 7.48528 10.5 5 10.5C2.51472 10.5 0.5 12.5147 0.5 15C0.5 17.4853 2.51472 19.5 5 19.5Z" fill="#10121B"/>
                    <path d="M23 30C25.4853 30 27.5 27.9853 27.5 25.5C27.5 23.0147 25.4853 21 23 21C20.5147 21 18.5 23.0147 18.5 25.5C18.5 27.9853 20.5147 30 23 30Z" fill="#10121B"/>
                    <path d="M8.88477 17.2651L19.1298 23.2351" stroke="#10121B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.1148 6.76514L8.88477 12.7351" stroke="#10121B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="article-pos__icons-comments">
                        <svg className="article-pos__icons-comments-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9675 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28826 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#EB752B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="article-pos__icons-comments-count">40</span>
                    </div>
                    <svg className="article-pos__icons-like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0002 11.9999L12.0002 20.9999C10.3662 20.9999 9.00017 19.6339 9.00017 17.9999V13.9999H3.34017C2.14257 14.0134 1.15807 12.8997 1.34017 11.6999L2.72017 2.69986C2.86782 1.72628 3.73553 0.988732 4.72017 0.999863H16.0002M16.0002 11.9999V0.999863M16.0002 11.9999H18.6702C19.8266 12.0203 20.8451 11.146 21.0002 9.99986V2.99986C20.8451 1.85369 19.8266 0.979411 18.6702 0.999863H16.0002" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="article-pos__icons-like-count">32</span>
                    <svg className="article-pos__icons-like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10L10 1C11.634 1 13 2.366 13 4V8H18.66C19.8734 7.98626 20.8397 9.11589 20.66 10.3L19.28 19.3C19.1324 20.2736 18.2646 21.0111 17.28 21H6M6 10V21M6 10H3C1.91067 10 1 10.9107 1 12V19C1 20.0893 1.91067 21 3 21H6" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="article-pos__content">
                    <div className="article-pos__content-head">
                        <span className="article-pos__content-head-cat">Статьи - </span>
                        <span className="article-pos__content-head-date">29 сентября, 13:09</span>
                    </div>
                    <h3 className="article-pos__content-title">Топ 5 аниме с лучшим музыкальным сопровождением ч.1</h3>
                    <div className="article-pos__content-user">
                        <img className="article-pos__content-user-avatar" src="https://img.careeridn.com/img/definition/person.jpg" />
                        <div className="article-pos__content-user-cont">
                            <span className="article-pos__content-user-cont-name">Archakov blog</span>
                            <span className="article-pos__content-user-cont-count">23 Публикации</span>
                        </div>
                        <span className="article-pos__content-user-count">+ 48 564</span>
                    </div>
                    <p className="article-pos__content-text">«Кура» — организация, что работает над расследованием преступлений и использует специальную систему «Мидзуханомэ», способную чувствовать намерение убийства. Талантливый детектив Сакайдо становится пилотом «Мидзуханомэ» и проникает в глубины бессознательного («Ай-ди») преступников, так называемый «мир жажды убийства», дабы найти зацепки для следствия. Разбираясь с чередой загадочных и жестоких происшествий, детектив неожиданно нападает на след возможного создателя серийных убийц — Джона Уокера.</p>
                    <img className="article-pos__content-img" src="https://avatars.mds.yandex.net/get-zen_doc/1781567/pub_5e85e8a46ae5482256cab9f4_5e85ea695aa311731cd5f181/scale_1200" />
                    <div className="article-pos__content-tags">
                        <span className="article-pos__content-tags-item">#Музыка</span>
                        <span className="article-pos__content-tags-item">#Аниме</span>
                        <span className="article-pos__content-tags-item">#Топ5</span>
                        <span className="article-pos__content-tags-item">#Подборки</span>
                        <span className="article-pos__content-tags-item">#Аниметоп</span>
                    </div> 
                    <div className="article-pos__content-user article-pos__content-userprof">
                        <img className="article-pos__content-user-avatar" src="https://img.careeridn.com/img/definition/person.jpg" />
                        <div className="article-pos__content-user-cont article-pos__content-userprof-cont">
                            <span className="article-pos__content-user-cont-name">Archakov blog</span>
                            <span className="article-pos__content-user-cont-count">23 Публикации</span>
                        </div>
                        <span className="article-pos__content-user-count">+ 48 564</span>
                    </div>
                </div>
            </div>
            <Comment />
            <More />
            <Footer />
        </div>
        </>
    )
}
export default Article;