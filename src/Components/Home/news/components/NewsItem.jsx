import React from 'react'
import moment from 'moment';

function NewsItem({ newsItem }) {
    console.log(newsItem);
    const { info, title_image } = newsItem
    const { title,  rightcol } = info
    const { url } = title_image

    return (
        <div className='news_box'>
            <div className="news_box__header">
                <div className="news_box__title">{title}</div>
            </div>
            <div className="news_box__body">
                <img src={url} alt="" />
                <div className="news_box__text">
                    {rightcol}
                </div>
            </div>
        </div>
    )
}

export default NewsItem
