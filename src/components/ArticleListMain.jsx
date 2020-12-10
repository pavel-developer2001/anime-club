import React from "react";
import {Link} from "react-router-dom";

const ArticleListMain = () => {
    return (
        <div className="article-list-main">
            <img className="article-list-main__img" src="https://avatars.mds.yandex.net/get-zen_doc/1712117/pub_5e85e8a46ae5482256cab9f4_5e85ee81ddc8e520673d9b51/scale_1200" />
            <div className="article-list-main__content">
                <div className="article-list-main__content-head">
                    <span className="article-list-main__content-head-cat">Статьи</span>
                    <span className="article-list-main__content-head-author"> • Оверлодс</span>
                    <span className="article-list-main__content-head-date"> • 2 часа назад 🔥</span>
                </div>
                <div className="article-list-main__content-title">Топ 5 аниме с лучшим музыкальным сопровождением ч.1</div>
                <p className="article-list-main__content-text">Мой топ 5 аниме сериалов, где во время просмотра можно услышать очень хорошие треки. Под каждым сериалом я оставлю несколько названий песен, которые встречаются в данном сериале.</p>
                <div className="article-list-main__content-tags">
                    <span className="article-list-main__content-tags-item">#аниме</span>
                    <span className="article-list-main__content-tags-item">#музыка</span>
                    <span className="article-list-main__content-tags-item">#топ5</span>
                </div>
                <div className="article-list-main__content-footer">
                    <Link to="/10" >
                        <div className="article-list-main__content-footer-btn btn-component">
                            <svg className="btn-component-icon" width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 9C1.5 9 5.5 1 12.5 1C19.5 1 23.5 9 23.5 9C23.5 9 19.5 17 12.5 17C5.5 17 1.5 9 1.5 9Z" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 12C14.1569 12 15.5 10.6569 15.5 9C15.5 7.34315 14.1569 6 12.5 6C10.8431 6 9.5 7.34315 9.5 9C9.5 10.6569 10.8431 12 12.5 12Z" stroke="#EB752B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Читать подробнее
                        </div>
                    </Link>
                    <div className="article-list-main__content-footer-likes ">
                        <svg className="article-list-main__content-footer-likes-like"  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12.0001L12 21.0001C10.366 21.0001 8.99999 19.6341 8.99999 18.0001V14.0001H3.33999C2.14239 14.0137 1.15788 12.8999 1.33999 11.7001L2.71999 2.70011C2.86763 1.72653 3.73534 0.988976 4.71999 1.00011H16M16 12.0001V1.00011M16 12.0001H18.67C19.8264 12.0206 20.845 11.1463 21 10.0001V3.00011C20.845 1.85393 19.8264 0.979656 18.67 1.00011H16" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="article-list-main__content-footer-likes-count">42</span>  
                        <svg className="article-list-main__content-footer-likes-like"  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10L10 1C11.634 1 13 2.366 13 4V8H18.66C19.8734 7.98626 20.8397 9.11589 20.66 10.3L19.28 19.3C19.1324 20.2736 18.2646 21.0111 17.28 21H6M6 10V21M6 10H3C1.91067 10 1 10.9107 1 12V19C1 20.0893 1.91067 21 3 21H6" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
export default ArticleListMain;