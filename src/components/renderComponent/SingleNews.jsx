import React from 'react';

const SingleNews = ({news}) => {
    const {author, details, image_url, rating, thumbnail_url, title, total_view} = news;
    console.log(news);
    return (
        <div>
            <div>
                <div>
                    <img src={author?.img} alt="" />
                    <div>
                        <h3>{author?.name}</h3>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;