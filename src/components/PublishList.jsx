import React from "react";
import PublishListItem from "./PublishListItem";

const PublishList = () => {
    return (
        <>
        <div className="category">
                <h4 className="category__name">Публикации</h4>
                <span className="all-items">Все публикации</span>
            </div>
        <div className="publish-list">
            <PublishListItem img="https://i.ytimg.com/vi/oUTxysI38ug/maxresdefault.jpg" date="09.11.2020" text="Новости" />
            <PublishListItem img="https://i.ytimg.com/vi/7YrwBiv8hQg/maxresdefault.jpg" date="12.09.2020" text="Обзоры"/>
            <PublishListItem img="https://avatars.mds.yandex.net/get-zen_doc/1872259/pub_5cdd36671d586800b3879971_5cdd369711c0eb00b38df7e4/scale_1200" date="14.10.2020" text="Статьи" />
            <PublishListItem img="https://resize.cdn.otakumode.com/ex/1200.630/0.174.829.437/u/5601eeec25d34377ace963bea30001fc.jpg" date="12.08.2020" text="Подслушано" />
        </div>
        </>
    );
};

export default PublishList;