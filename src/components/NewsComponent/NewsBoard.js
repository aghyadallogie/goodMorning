import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Flashcard from './Flashcard';

export const NewsBoard = () => {

    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    const [state, setState] = useState([]);

    useEffect(() => {
        Axios
            .get(url)
            .then(response => {
                setState(response.data.articles.map(article => {
                    return {
                        id: Date.now(),
                        title: article.title,
                        author: article.author,
                        description: article.description,
                        url: article.url,
                        urlToImage: article.urlToImage
                    }
                }))
            });
    }, [])

    return (
        <div className="card-container">
            <Flashcard articlesArray={state} />
        </div>
    )
}