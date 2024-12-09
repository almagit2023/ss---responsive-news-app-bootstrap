import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img
          src={article.urlToImage || 'https://via.placeholder.com/150'}
          alt={article.title}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
