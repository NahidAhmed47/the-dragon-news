import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './renderComponent/SingleNews';

const NewsDisplay = () => {
    const news = useLoaderData();

    return (
        <div>
            {
                news.map(n => <SingleNews key={n._id} news={n}></SingleNews>)
            }
        </div>
    );
};

export default NewsDisplay;