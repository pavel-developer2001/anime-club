import React from "react";

const CommentListItem = () => {
    return (
        <div className="comment-list-item">
            <img className="comment-list-item__img" src="https://gp.by/upload/491/4913f8c44868fe9f518b204a6e2aa8f4.jpg" />
            <div className="comment-list-item__content">
                <div className="comment-list-item__content-head">
                    <span className="comment-list-item__content-head-name">Владилен Минин</span>
                    <span className="comment-list-item__content-head-count">+ 224</span>
                    <span className="comment-list-item__content-head-date">2 минуты назад</span>
                </div>
                <p className="comment-list-item__content-text" >Асуми Коминами "Мы не можем учиться", "Заботливая 800 летняя жена" Сэнко, Комое Цукуеми "Индекс волшебства ", Поплар Танэсима "Работа", Эна Ибарада "Наука влюблена и мы докажем это".</p>
                <div className="comment-list-item__content-answer">
                    <svg className="comment-list-item__content-answer-commenticon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.50001C18.0034 10.8199 17.6951 12.1219 17.1 13.3C16.3944 14.7118 15.3098 15.8992 13.9675 16.7293C12.6251 17.5594 11.0782 17.9994 9.5 18C8.18013 18.0035 6.87812 17.6951 5.7 17.1L0 19L1.9 13.3C1.30493 12.1219 0.996559 10.8199 1 9.50001C1.00061 7.92177 1.44061 6.37486 2.27072 5.03256C3.10083 3.69026 4.28826 2.60558 5.7 1.90001C6.87812 1.30494 8.18013 0.996572 9.5 1.00001H10C12.0843 1.11501 14.053 1.99477 15.5291 3.47087C17.0052 4.94697 17.885 6.91567 18 9.00001V9.50001Z" stroke="#EB752B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="comment-list-item__content-answer-answr">Ответить</span>
                    <svg className="comment-list-item__content-answer-like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0002 12L12.0002 21C10.3662 21 9.00017 19.634 9.00017 18V14H3.34017C2.14257 14.0136 1.15807 12.8998 1.34017 11.7L2.72017 2.7C2.86782 1.72642 3.73553 0.988869 4.72017 1H16.0002M16.0002 12V1M16.0002 12H18.6702C19.8266 12.0205 20.8451 11.1462 21.0002 10V3C20.8451 1.85382 19.8266 0.979549 18.6702 1H16.0002" stroke="#A5A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="comment-list-item__content-answer-count">26</span>
                    <svg className="comment-list-item__content-answer-like" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10L10 1C11.634 1 13 2.366 13 4V8H18.66C19.8734 7.98626 20.8397 9.11589 20.66 10.3L19.28 19.3C19.1324 20.2736 18.2646 21.0111 17.28 21H6M6 10V21M6 10H3C1.91067 10 1 10.9107 1 12V19C1 20.0893 1.91067 21 3 21H6" stroke="#A5A5A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="comment-list-item__line"></div>
            </div> 
        </div>
    );
};
export default CommentListItem;