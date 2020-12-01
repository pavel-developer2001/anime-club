import React from "react";

const ArticleListItem = () => {
    return (
        <div className="article-list-item">
            <img className="article-list-item__img" src="https://avatars.mds.yandex.net/get-zen_doc/1781567/pub_5e85e8a46ae5482256cab9f4_5e85e93099b22b07918978bc/scale_1200" />
            <div className="article-list-item__content">
                <div className="article-list-item__content-head">
                    <span className="article-list-item__content-head-cat" >Статьи</span>
                    <span className="article-list-item__content-head-author" > • Оверлодс</span>
                    <span className="article-list-item__content-head-date" > • 2 часа назад 🔥</span>
                </div>
                <div className="article-list-item__content-title">Топ 5 аниме с лучшим музыкальным сопровождением ч.1</div>
                <div className="article-list-item__content-tags">
                    <span className="article-list-item__content-tags-item">#Аниме</span>
                    <span className="article-list-item__content-tags-item">#Музыка</span>
                    <span className="article-list-item__content-tags-item">#Топ 5</span>
                </div>
                <div className="article-list-item__content-footer">
                    <div className="article-list-item__content-footer-comments">
                        <svg className="article-list-item__content-footer-comments-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9675 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28826 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#EB752B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="article-list-item__content-footer-comments-count">17</span>
                    </div>
                    <div className="article-list-item__content-footer-likes">
                        <svg className="article-list-item__content-footer-likes-like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12.0001L12 21.0001C10.366 21.0001 8.99999 19.6341 8.99999 18.0001V14.0001H3.33999C2.14239 14.0137 1.15788 12.8999 1.33999 11.7001L2.71999 2.70011C2.86763 1.72653 3.73534 0.988976 4.71999 1.00011H16M16 12.0001V1.00011M16 12.0001H18.67C19.8264 12.0206 20.845 11.1463 21 10.0001V3.00011C20.845 1.85393 19.8264 0.979656 18.67 1.00011H16" stroke="#A5A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="article-list-item__content-footer-likes-like" className="article-list-item__content-footer-likes-count">30</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10L10 1C11.634 1 13 2.366 13 4V8H18.66C19.8734 7.98626 20.8397 9.11589 20.66 10.3L19.28 19.3C19.1324 20.2736 18.2646 21.0111 17.28 21H6M6 10V21M6 10H3C1.91067 10 1 10.9107 1 12V19C1 20.0893 1.91067 21 3 21H6" stroke="#A5A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default ArticleListItem;