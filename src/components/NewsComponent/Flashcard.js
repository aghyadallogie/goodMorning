import React, { useState } from 'react';

export default function Flashcard({ articlesArray }) {

    const [articleIndex, setArticleIndex] = useState(0);
    const [flip, setFlip] = useState(false);

    const handleCardClick = _ => {
        setFlip(!flip);
        if (articleIndex < articlesArray.length - 1) {
            setArticleIndex(articleIndex + 1);
        } else {
            setArticleIndex(0);
        }
    }

    const targetArticle = articlesArray[articleIndex];
    const ahref = articleIndex > 0 ? articlesArray[articleIndex - 1] : articlesArray[articleIndex];

    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={handleCardClick}>
            <div className="front">
                {targetArticle && <img style={{ width: '60%', marginBottom: '20px', border: '3px black solid' }} src={targetArticle.urlToImage} alt="" />}
                {targetArticle && targetArticle.title}
                {ahref && <a href={ahref.url}>read article</a>}
            </div>
            <div className="back">
                {targetArticle && <img style={{ width: '60%', marginBottom: '20px', border: '3px black solid' }} src={targetArticle.urlToImage} alt="" />}
                {targetArticle && targetArticle.title}
                {ahref && <a href={ahref.url}>read article</a>}
            </div>
        </div>
    )
}
